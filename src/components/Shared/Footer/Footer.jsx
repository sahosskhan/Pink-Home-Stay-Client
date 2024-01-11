import { Link } from "react-router-dom"

const Footer = () => {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer className=' text-gray-800 relative bottom-0 left-0'>
      <footer className="bg-rose-50/30">
    <div className="container flex flex-col items-center gap-x-40 justify-between px-6 py-[22px] mt-5  mx-auto lg:flex-row">

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <Link to='/privacy-policy' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Privacy Policy
            </Link>

            <Link to='/terms-and-conditions' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Terms & Conditions
            </Link>

            <Link to='/cookies-policy' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Cookies Policy
            </Link>
            <Link to='/become-host-policy' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Become Host Policy
            </Link>
            <Link to='/refund-and-cancel-policy' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Refund & Cancel Policy
            </Link>

            <Link to='/support-center' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
            Support Center
            </Link>

            <Link to='/our-teams' className="text-base text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400">
           Our Teams
            </Link>
        </div>

        <p className="mt-6 text-base text-gray-500 lg:mt-0 dark:text-gray-400">© {year} <span className="text-rose-500">Pink Stay Home Inc.</span> All rights reserved.</p>
    </div>
</footer>
 
    </footer>
  )
}

export default Footer
