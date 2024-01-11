
import useUserData from '../../../hooks/useUserData';
import Loader from '../../../components/Shared/Loader';
import { FaEdit} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
const{userData, isLoading}=useUserData();

if (isLoading) {
<Loader/>
}
const inputString = userData?.role;
  const modifiedString = inputString ? inputString.charAt(0).toUpperCase() + inputString.slice(1) : '';
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-rose-50 rounded-md  relative">
      <Helmet>
        <title>Profile | Pink Home Stay</title>
      </Helmet>
    <div className="flex justify-end items-end">
<Link to='edit-profile'>
<button className="text-rose-500 hover:text-rose-700">
        <FaEdit size={20} />
      </button>
</Link>
    </div>

    <div className="relative mt-5">
        <img
          src={userData?.cover}
          alt="Cover"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-0 left-0 ml-4 mb-4">
          <img
            src={userData?.photo}
            alt="Profile"
            className="w-[110px] h-[110px] rounded-full border-rose-500 border-2"
          />
        </div>
      </div>

    <div className="mt-8">
<div className='flex lg:flex-row flex-col gap-x-2'>
<h1 className="text-2xl font-semibold">{userData?.name} </h1>
      <p className="text-gray-500 my-2">( {userData?.uid} )</p>
</div>
     
      <p className="text-gray-500 text-base mb-5">{modifiedString}, Pink Stay Home</p>
     


      <div className="flex items-center mb-4">
        <span className="text-gray-600">{userData?.about}</span>
      </div>

     
      <p>
        <strong>Date of Birth:</strong> {userData?.dob}
      </p>
      <p>
        <strong>Gender:</strong> {userData?.gender}
      </p>
      <p>
        <strong>Email:</strong> {userData?.email}
      </p>
      <p>
        <strong>Contact Number:</strong> +{userData?.phone}
      </p>
  
    </div>

    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <p>
        <strong>Payment Method:</strong> {userData?.pay}
      </p>
      <p>
        <strong>Account Number:</strong> {userData?.acc}
      </p>
    </div>
  </div>
  )
}

export default Profile
