import { BsFillBookmarkCheckFill } from "react-icons/bs";
import useRole from '../../../hooks/useRole'
import MenuItem from '../Sidebar/MenuItem'
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import HostModal from '../../Modal/HostRequestModal'
import { becomeHost } from '../../../api/auth'
import toast from 'react-hot-toast'
import { FaUserNinja } from "react-icons/fa";
const GuestMenu = () => {
  const [role] = useRole()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const modalHandler = async () => {
    try {
      const data = await becomeHost(user?.email)
      if (data.modifiedCount > 0) {
        toast.success('Success!, Please wait for admin confirmation.')
      } else {
        toast.success('Please!, Wait for admin approval👊')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsOpen(false)
    }
  }
  return (
    <>
      <MenuItem
        icon={BsFillBookmarkCheckFill}
        label='My Bookings'
        address='my-bookings'
      />

      {role === 'guest' && (
        <div
          onClick={() => setIsOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <FaUserNinja className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}

      <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      />
    </>
  )
}

export default GuestMenu
