import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import './CheckoutForm.css'
import { ImSpinner9 } from 'react-icons/im'
import {
  createPaymentIntent,
  saveBookingInfo,
  updateStatus,
} from '../../api/bookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'

const CheckoutForm = ({ bookingInfo, closeModal }) => {
  const stripe = useStripe()
  const elements = useElements()
  const {userData}= useUserData();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    // create payment intent
    if (bookingInfo.price > 0) {
      createPaymentIntent({ price: bookingInfo.price }).then(data => {
        setClientSecret(data.clientSecret)
      })
    }
  }, [bookingInfo])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    // Card data lookup (Asynchronous Network Call )
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
      toast.error('payment method', paymentMethod)
    }

    setProcessing(true)

    // Ekhane taka katbe
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: userData?.email,
            name: userData?.name,
          },
        },
      })

    if (confirmError) {
      setCardError(confirmError.message)
    }

    toast.error('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      }
      try {
        // save payment information to the server
        await saveBookingInfo(paymentInfo)

        // Update room status in db
        await updateStatus(bookingInfo.roomId, true)
        const text = `Booking Successful! ${paymentIntent.id}`
        toast.success(text)
        navigate('/dashboard/my-bookings')
      } catch (err) {
        toast.error(err?.message)
      } finally {
        setProcessing(false)
      }

      setProcessing(false)
    }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${bookingInfo.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm