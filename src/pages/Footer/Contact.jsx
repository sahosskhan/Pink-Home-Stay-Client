import { Helmet } from "react-helmet-async";
import { FaFacebookSquare, FaInstagramSquare, } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="container mx-auto p-4 capitalize">
                <Helmet>
        <title>Customer Care | Pink Home Stay</title>
      </Helmet>
                  <div className="mb-4">
  
        <nav className="text-gray-600 font-semibold text-xl text-center my-8">
          <Link to="/" className="hover:text-rose-500">
          <i className="fa-solid fa-house-chimney"></i>  Home
          </Link>
          <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
          <span className='text-rose-500'><i className="fa-solid fa-headset"></i>   Customer Care</span>
        </nav>
      </div>

      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">If you have any questions or need assistance, feel free to reach out to us. <br /> Our friendly team is always here to assist you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex flex-col items-center justify-center text-center bg-rose-100  py-10 rounded-lg">

<h2 className="text-xl font-medium text-gray-800 dark:text-white"><i className="fa-regular fa-envelope"></i> Email</h2>
<p className="mt-2 text-lg text-gray-500 dark:text-gray-400">24/7 you can email us.</p>
<p className="mt-2 text-lg text-rose-500 dark:text-rose-400">support@pinkhomestay.com</p>
</div>

<div className="flex flex-col items-center justify-center text-center bg-rose-100  py-10 rounded-lg">
<h2 className=" text-xl font-medium text-gray-800 dark:text-white"><i className="fa-solid fa-map-location-dot"></i> Office</h2>
<p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
<p className="mt-2 text-lg text-rose-500 dark:text-rose-400">Kushtia, Khulna, Bangladesh.</p>
</div>

<div className="flex flex-col items-center justify-center text-center bg-rose-100  py-10 rounded-lg">

<h2 className="text-xl font-medium text-gray-800 dark:text-white"><i className="fa-solid fa-phone-volume"></i> Phone</h2>
<p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Mon-Fri from 9am to 9pm.</p>
<p className="mt-2 text-lg text-rose-500 dark:text-rose-400">+8801959939059</p>
</div>


            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
      title="map"
      className="w-full h-full"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.50060619651805!2d89.12131206591086!3d23.910944009149116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe97b1eeaaaaab%3A0x85dcf4847bf686c0!2sKushtia%20Municipality!5e1!3m2!1sen!2sbd!4v1704926233533!5m2!1sen!2sbd" 
    ></iframe>
            </div>
        </div>
    </div>
</section>



<div className="flex lg:flex-row md:flex-row flex-col  justify-between items-center gap-10">

<div className="lg:w-1/2  px-5">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love
                    to hear from you. You Can Also Submit Your Complain direct here.
                </p>

                <form className="mt-12">
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-rose-400 dark:focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-rose-400 dark:focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-rose-400 dark:focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-md hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
       
    </div>


<div>
    <h1 className=" text-3xl text-center my-8 font-bold">Follow us on Social media</h1>
<div className="grid gap-8 mt-8 grid-cols-1  lg:grid-cols-3 ">
<div className="bg-rose-100 p-5 rounded-md text-rose-500 flex flex-col justify-center items-center gap-3">
    <FaFacebookSquare size={70}/>
    <p className="text-rose-500 lowercase">@pink-home-stay</p>
    </div>

    <div className="bg-rose-100 rounded-md text-rose-500 p-5 flex flex-col justify-center items-center gap-3">
    <FaInstagramSquare size={70} />
    <p className="text-rose-500 lowercase">@pink-home-stay</p>
    </div>

    <div className="bg-rose-100 rounded-md text-rose-500 p-5 flex flex-col justify-center items-center gap-3">
    <TiSocialTwitter size={70}/>
    <p className="text-rose-500 lowercase">@pink-home-stay</p>
    </div>

    
</div>
  
</div>

</div>

        </div>
    );
};

export default Contact;