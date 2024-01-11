/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Card from './Card'
import Container from '../Shared/Container'
import {  useSearchParams } from 'react-router-dom'
import Heading from '../Shared/Heading'
import Loader from '../Shared/Loader'
import { getAllRooms } from '../../api/rooms'

const Rooms = ({search}) => {
  
  const [rooms, setRooms] = useState([])
  const [params, setParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const category = params.get('category')
useEffect(() => {
  setLoading(true);
  getAllRooms().then(data => {
    let filteredRooms = data;

    // Filter by category
    if (category) {
      filteredRooms = filteredRooms.filter(room => room.category === category);
    }

    // Filter by search term
    if (search) {
      filteredRooms = filteredRooms.filter(
        room => room?.location?.toLowerCase().includes(search?.toLowerCase())
      );
    }

    setRooms(filteredRooms);
    setLoading(false);
  });
}, [category, search]);
const handleReload = () => {
  window.location.reload();
};
  if (loading) return <Loader />
  return (
    <Container>
      
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {rooms.map(room => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
         <button onClick={handleReload} className='bg-rose-500 py-2 px-6 mt-4 text-lg rounded-md'>Go Back</button>
        </div>
      )}
    </Container>
  )
}

export default Rooms
