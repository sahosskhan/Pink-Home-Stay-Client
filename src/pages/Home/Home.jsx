import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Rooms/Rooms'
import { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const Home = () => {
  
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const closeFirstModal = () => {
    setFirstModalOpen(false);
    localStorage.setItem('visited', 'true');
    setSecondModalOpen(true); // Open the second modal immediately
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem('visited');
    const hasSessionVisited = sessionStorage.getItem('sessionVisited');

    if (!hasVisited && !hasSessionVisited) {
      setFirstModalOpen(true);
      sessionStorage.setItem('sessionVisited', 'true');
    }
  }, []);
  const { register, handleSubmit,reset } = useForm();
  const [search, setSearch] = useState("");
  const onSubmit = (data) => {
    const searchData = data.searchText;
    const searchDataText = searchData;
    console.log(searchDataText);
    setSearch(searchDataText);
    reset()
  };

  return (
    <div>
      <Helmet>
        <title>Pink Stay Home | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {firstModalOpen  &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
            
      
            <section className="bg-white dark:bg-gray-900 p-4 border-8 border-rose-500 rounded-xl ">
      
    <div className="container  flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-xl md:text-3xl uppercase font-extrabold tracking-tight text-rose-500 xl:text-5xl ">
        Download our free mobile app!
        </h2>

        <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
        Download <span className='text-rose-500 font-semibold'>Pink Stay Home</span>  mobile app now and elevate your stay to new heights. Immerse yourself in a world of luxury, convenience, and personalized service – all at your fingertips. Book, stay, and indulge with ease, because your journey begins with our app. Welcome to a world where hospitality knows no bounds!
        </p>

        <div className="mt-6">
        <Link className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-rose-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-rose-500 focus:ring focus:ring-rose-300 focus:ring-opacity-80">
                <FaAppStoreIos className='text-lg'  />
                    <span className="mx-2">
                        Get it on the App Store
                    </span>
                </Link>

                <Link
                    className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-rose-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-rose-500 focus:ring
                     focus:ring-rose-300 focus:ring-opacity-80">
                <BiLogoPlayStore className='text-xl' />

                    <span className="mx-2">
                        Get it on Google Play
                    </span>
                </Link>
        </div>
    </div>
    <div className='flex  justify-end items-end'>
          <button
                className="  "
                onClick={closeFirstModal}
              >
               <GrClose className='text-rose-500 ' />
              </button>
          </div>
</section>

          </div>,
          document.body
        )}

{secondModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
           <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <Link to='/cookies-policy' className="text-rose-500 hover:underline">Read cookies policies</Link>. </p>
    
    <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
        <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
           
        </button>

        <button onClick={closeSecondModal} className=" text-xs bg-rose-500 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Accept
        </button>
    </div>
</section>
          </div>,
          document.body
        )}

<div>

<div className="flex flex-col justify-center items-center space-y-3 lg:space-y-0 lg:flex-row ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    id="email"
                    type="text"
                    name="searchText"
                    {...register("searchText")}
                    className="px-6 py-4 shadow-md text-gray-700 bg-white border rounded-lg rounded-r-none dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300 "
                    placeholder="Search Your Destination. "
                  />

                  <button 
                    type="submit" className='bg-rose-500 shadow-md p-[17px] rounded-l-none rounded-lg'
                  >
                    Search
                  </button>
                </form>
              </div>

<Categories />
      <Rooms search={search} />
</div>
    </div>
  )
}

export default Home
