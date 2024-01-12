import { format } from 'date-fns'
import toast from 'react-hot-toast'
import { useState } from 'react'
import DeleteModal from '../../../Modal/DeleteModal'
import { deleteBooking, updateStatus } from '../../../../api/bookings'
import useRole from '../../../../hooks/useRole'
import { Link } from 'react-router-dom'
const TableRow = ({ booking, refetch }) => {
  const [role] = useRole()
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)

  const modalHandler = async id => {
    try {
      await deleteBooking(id)
      await updateStatus(booking.roomId, false)
      refetch()
      toast.success('Booking Canceled')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    } finally {
      closeModal()
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3 w-80'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.guest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {booking?.guest?.name}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>${booking?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.from), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.to), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>

{role === 'guest' &&
          <span className='relative flex gap-x-2'>Cancel <i className="fa-solid fa-xmark"></i></span>
  }
{role === 'host' &&
          <span className='relative flex gap-x-2'>Reject <i className="fa-solid fa-xmark"></i></span>
  }
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={booking._id}
        />
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <Link to={`/bookings-room/${booking?._id}`}>
        <span
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>

          <span className='relative'>Invoice <i className="fa-solid fa-file-invoice"></i></span>
        </span>
        </Link>
      </td>
    </tr>
  )
}

export default TableRow
