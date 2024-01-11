/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/auth'
import toast from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
  const { signIn, signInWithGoogle, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
 const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      //2. User Login
      const result = await signIn(email, password)
      //5. get token
      await getToken(result?.user?.email)

      navigate(from, { replace: true })
      toast.success('Sign In Successful!')
    } catch (err) {
      err && toast.error('Invalid email or password please try again')
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //2. User Registration using google
      const result = await signInWithGoogle()

      //4. save user data in database
      const dbResponse = await saveUser(result?.user)


      //5. get token
      await getToken(result?.user?.email)
      navigate(from, { replace: true })
      toast.success('Sign In Successful! With Google.')
    } catch (err) {
      err && toast.error('Invalid email or password please try again.')
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
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
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
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
                  {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl'/>}
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
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
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
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
