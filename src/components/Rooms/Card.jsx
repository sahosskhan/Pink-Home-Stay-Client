
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Card = ({ room }) => {
  const dateString = room.from;
  const dateObject = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = months[dateObject.getUTCMonth()];
  const day = dateObject.getUTCDate()+1;
  const dateString1 = room.to;
  const dateObject1 = new Date(dateString1);
  const day1 = dateObject1.getUTCDate()+1;
 const days= day1-day;






  return (
    <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={room?.image}
            alt='Room'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-xl'>{room?.location}</div>
        <div className='font-normal text-base text-neutral-500'>{monthName} {day} - {day1}, {days} nights</div>
    
          <div className='text-base text-neutral-500'><span className='font-semibold text-xl text-rose-500'>${room?.price}</span> night</div>
       
      </div>
    </Link>
  )
}

export default Card
