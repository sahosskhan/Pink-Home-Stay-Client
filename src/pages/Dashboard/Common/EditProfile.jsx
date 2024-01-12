import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useUserData from "../../../hooks/useUserData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";


const EditProfile = () => {
    const{userData}=useUserData();
    const [uploadButtonText, setUploadButtonText] = useState('Upload Profile Image');
    const [uploadButtonText2, setUploadButtonText2] = useState('Upload Cover Image')
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate()
    const handleImageChange = image => {
        setUploadButtonText(image.name)
      }
    const handleImage2Change = image => {
        setUploadButtonText2(image.name)
      }

      const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true);
        const form = e.target
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const dob = form.dob.value;
        const gender = form.gender.value;
        const acc = form.acc.value;
        const pay = form.pay.value;
        const about = form.about.value;
        
        let profileURL, coverURL;
     
        const profileImage = form.profileImage.files[0];
        if (!profileImage) {
          profileURL = userData?.photo;
        }
        else {
          const profileImage_url = await imageUpload(profileImage);
          profileURL = profileImage_url?.data?.display_url;
        }
        const coverImage = form.coverImage.files[0];
        if (!coverImage ) {
          coverURL = userData?.cover;
        }
        else {
          const coverImage_url = await imageUpload(coverImage);
          coverURL = coverImage_url?.data?.display_url;
        }
      
        const userInfo = {
          name,
          phone,
          address,
          dob,
          gender,
          acc,
          pay,
          about,
          photo: profileURL,
          cover: coverURL,
        };
      
        try {
          const response = await fetch(`https://pink-stay-home-server.vercel.app/users/update-data/${userData?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          });
      
          const data = await response.json();
      
          if (data.modifiedCount > 0) {
            toast.success('User Data Updated!');
            navigate('/dashboard/profile');
          } else {
            toast.error(data.error || 'Failed to update user data. Please try again.');
          }
        } catch (error) {
          console.error("Error updating user data:", error);
          toast.error('An unexpected error occurred. Please try again later.');
        } finally {
          setLoading(false);
        }



    }
   

    return (
        <div>
              <Helmet>
        <title>Edit Profile | Pink Home Stay</title>
      </Helmet>
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl '>
      <h1 className="my-5 text-center text-2xl text-rose-500 font-bold"><i className="fa-solid fa-id-card-clip"></i> Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 bg-rose-50 p-10 rounded-lg'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                defaultValue={userData?.name}
                type='text'
                placeholder='Name'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='phone' className='block text-gray-600'>
                Phone Number
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='phone'
                id='phone'
                type='number'
                placeholder='Phone Number'
                required
                defaultValue={userData?.phone}
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='address' className='block text-gray-600'>
                Address
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='address'
                id='address'
                type='text'
                placeholder='Address'
                required
                defaultValue={userData?.address}
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='dob' className='block text-gray-600'>
                Date Of Birth
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='dob'
                id='dob'
                type='date'
                placeholder='Date Of Birth'
                required
                defaultValue={userData?.dob}
              />
            </div>


            <div className='space-y-1 text-sm'>
              <label htmlFor='gender' className='block text-gray-600'>
                Gender
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='gender'
                defaultValue={userData?.gender}
              >
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Prefer No To Say">Prefer No To Say</option>
              </select>
              </div>

              <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={e => handleImage2Change(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='coverImage'
                      id='coverImage'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText2}
                    </div>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
                <label htmlFor='role' className='block text-gray-600'>
                  Role
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='role'
                  id='role'
                  type='text'
                  defaultValue={userData?.role}
                  placeholder='Role'
                  disabled
                />
              </div>
       
              <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='email'
                id='email'
                type='email'
                defaultValue={userData?.email}
                disabled
                placeholder='Email'
                required
              />
            </div>


            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='acc' className='block text-gray-600'>
                  Account Number
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='acc'
                  id='acc'
                  type='text'
                  placeholder='acc'
                  required
                  defaultValue={userData?.acc}
                />
              </div>

              <div className='space-y-1 text-sm'>
              <label htmlFor='pay' className='block text-gray-600'>
                Payment Method
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='pay'
                defaultValue={userData?.pay}
              >
             <option value="Visa Card">Visa Card</option>
             <option value="Master Card">Master Card</option>
             <option value="Direct Bank">Direct Bank</option>
             <option value="Payoneer">Payoneer</option>
             <option value="PayPal">PayPal</option>
             <option value="SSLCommerce">SSLCommerce</option>
             <option value="GPay">GPay</option>
             <option value="Bkash">Bkash</option>
             <option value="Nagad">Nagad</option>
             <option value="Rocket">Rocket</option>
              </select>
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='bio' className='block text-gray-600'>
               About Yourself
              </label>

              <textarea
                id='about'
                defaultValue={userData?.about}
                className='block rounded-md focus:rose-300 w-full h-[140px] px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='about'
              ></textarea>
            </div>


            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='profileImage'
                      id='profileImage'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
           {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Save & Continue'
              )}

        </button>
      </form>
    </div>
        </div>
    );
};

export default EditProfile;