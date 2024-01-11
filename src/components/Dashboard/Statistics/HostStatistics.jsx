import { Calendar } from 'react-date-range'
import { FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { GiPlayerTime } from 'react-icons/gi'
import SalesLineChart from './SalesLineChart'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../Shared/Loader'
import { getHostStat } from '../../../api/utils'
const HostStatistics = () => {
  const { data: statData = [], isLoading } = useQuery({
    queryKey: ['statData'],
    queryFn: async () => await getHostStat(),
  })
  if (isLoading) return <Loader />
  return (
    <div>
      <div className='mt-12'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* Sales Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <FaDollarSign className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-rose-gray-600'>
                Total Sales
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-rose-gray-900'>
                ${statData?.totalSale}
              </h4>
            </div>
          </div>

          {/* Total Bookings */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-rose-600 to-rose-400 text-white shadow-rose-500/40`}
            >
              <BsFillCartPlusFill className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-rose-gray-600'>
                Total Bookings
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-rose-gray-900'>
                {statData?.bookingCount}
              </h4>
            </div>
          </div>
          {/* Total Rooms */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            >
              <BsFillHouseDoorFill className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-rose-gray-600'>
                Total Rooms
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-rose-gray-900'>
                {statData?.roomCount}
              </h4>
            </div>
          </div>

          {/* Users Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <GiPlayerTime className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-rose-gray-600'>
                Host Since...
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-rose-gray-900'>
                {statData?.hostSince &&
                  formatDistanceToNow(new Date(statData.hostSince))}
              </h4>
            </div>
          </div>
        </div>

        <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {/* Total Sales Graph */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
            <SalesLineChart data={statData?.chartData} />
          </div>
          {/* Calender */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
            <Calendar color='#F43F5E' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostStatistics
