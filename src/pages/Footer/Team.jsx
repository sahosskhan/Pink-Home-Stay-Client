import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Team = () => {
    return (
        <div>
                         <Helmet>
        <title>Executive Team | Pink Home Stay</title>
      </Helmet>
          <section className="bg-rose-50 dark:bg-gray-900">
    <div className="h-[32rem] bg-rose-100 0">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>
      
            <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-rose-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-rose-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-rose-500 rounded-full"></span>
            </div>
            <nav className="text-gray-600 font-semibold text-xl text-center my-8">
          <Link to="/" className="hover:text-rose-500">
          <i className="fa-solid fa-house-chimney"></i>  Home
          </Link>
          <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
          <span className='text-rose-500'><i className="fa-solid fa-clipboard-list"></i>  Executive Team</span>
        </nav>
        </div>
    </div>

    <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8  xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Muhammad Sahoss Khan</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">CEO & Founder</p>
 
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Shariar Ahamed Shifat</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">CTO & Co-Founder</p>
 
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mostofa D Taj</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">CPO & Co-Founder</p>
 
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Hasin Hyder</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">DevOps Engineer</p>


            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Jhanker Mahabub</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">backend Engineer</p>

            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Sumit Saha</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">Frontend Engineer</p>

            </div>


            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Anisul Islam</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">Database Engineer</p>

            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Imran Ali Dina</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">Graphics Designer</p>

            </div>


            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-rose-500">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://i.ibb.co/JxrPY9P/333.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Nikhil Pawar</h1>

                <p className="mt-2 text-lg text-rose-500 capitalize dark:text-gray-300">UI-UX Designer</p>

            </div>




        </div>
    </div>
</section>  
        </div>
    );
};

export default Team;