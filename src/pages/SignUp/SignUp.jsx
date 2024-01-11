/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/auth'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { imageUpload } from '../../api/utils'
const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const validatePassword = (password) => {
    // Password must contain minimum 6 characters, special characters, and one capital letter
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/;
    return passwordRegex.test(password);
  };
  const validateEmail = (email) => {
    // List of trusted email domains
    const trustedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.live.com','outlook.com','aol.com', 'protonmail.com', 'zoho.com', 'icloud.com', 'fastmail.com', 'yandex.com', 'gmx.com','pink-home-stay.web.app', 'pink-home-stay.firebaseapp.com','hushmail.com','runbox.com','mail.com','guerrillamail.com','pinkhomestay.web.app'];

    // Extract domain from email
    const emailParts = email.split('@');
    const domain = emailParts[1];

    if (!trustedDomains.includes(domain)) {
      toast.error('Please use a valid & authorized domain based email address');
      return false;
    }

    return true;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {

      if (!validateEmail(email)) {
        return;
      }

      if (!validatePassword(password)) {
        toast.error(
          'Password must contain minimum 6 characters, special characters, and one capital letter'
        );
        return;
      }

      //1. Upload Image
      const imageData = await imageUpload(image);


      //2. User Registration
      const result = await createUser(email, password);

      //3. Save username & profile photo
      await updateUserProfile(name, imageData?.data?.display_url);


      //4. save user data in the database
      const dbResponse = await saveUser(result?.user);
   

      //5. get token
      await getToken(result?.user?.email);
      navigate('/');
      toast.success('Sign Up Successful!');
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      //2. User Registration using google
      const result = await signInWithGoogle();

      //4. save user data in the database
      const dbResponse = await saveUser(result?.user);

      //5. get token
      await getToken(result?.user?.email);
      navigate('/');
      toast.success('Sign Up Successful! With Google.');
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Pink Stay Home</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${
                  !validateEmail && 'border-red-500'
                }`}
              />
            </div>
            <div>
        <label htmlFor='password' className='text-sm mb-2'>
          Password
        </label>
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            autoComplete='new-password'
            id='password'
            required
            placeholder='*******'
            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 pr-10'
          />
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute right-3 top-2 text-rose-500 hover:text-rose-700 focus:outline-none'
          >
            {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
          </button>
        </div>
      </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
