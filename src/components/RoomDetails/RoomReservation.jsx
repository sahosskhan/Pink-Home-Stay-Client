/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Calender from './Calender'
import { differenceInDays} from 'date-fns'
import BookingModal from '../Modal/BookingModal'
import useUserData from '../../hooks/useUserData'

const RoomReservation = ({ room }) => {
  const {userData}= useUserData();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  });

  const handleDateChange = (ranges) => {
    const totalDays = differenceInDays(ranges.selection.endDate, ranges.selection.startDate);
    const total = totalDays + 1;

    setValue({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection',
    });

    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      to: ranges.selection.endDate,
      from: ranges.selection.startDate,
      price: total * room?.price,
    }));
  };

  useEffect(() => {
    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      to: value.endDate,
      from: value.startDate,
      price: calculateTotalPrice(),
    }));
  }, [value]);

  const calculateTotalPrice = () => {
    const totalDays = differenceInDays(value.endDate, value.startDate);
    const total = totalDays + 1;
    return total * room?.price;
  };




  const totalPrice = calculateTotalPrice();

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: userData?.name,
      email: userData?.email,
      image: userData?.photo,
      phone: userData?.phone,
      address: userData?.address,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    hostImage: room?.host?.image,
    hostName:room?.host?.name,
    image: room?.image,
  });


  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl text-rose-500 font-bold'>$ {room?.price}</div>
        <div className='font-medium text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <Calender handleDateChange={handleDateChange} value={value} />
      </div>
      <hr />
      <div className='p-4'>
        <Button
          disabled={room.host.email === userData?.email || room.booked}
          onClick={() => setIsOpen(true)}
          label={'Reserve'}
        />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  )
}

export default RoomReservation
