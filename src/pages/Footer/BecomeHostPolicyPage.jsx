
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BecomeHostPolicyPage = () => {
  return (
    <div className="container mx-auto p-4 capitalize">
      <Helmet>
        <title>Become Host Policy | Pink Home Stay</title>
      </Helmet>
    <div className="mb-4">
      <img src="https://i.ibb.co/HHLdxs5/Blue-Modern-Hawaii-Traveler-Youtube-Thumbnail.png" alt="Banner" className="w-full mb-4 rounded-lg" />

      <nav className="text-gray-600 font-semibold text-xl text-center my-8">
        <Link to="/" className="hover:text-rose-500">
        <i className="fa-solid fa-house-chimney"></i>  Home
        </Link>
        <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
        <span className='text-rose-500'><i className="fa-solid fa-user-ninja"></i> Become Host Policy</span>
      </nav>
    </div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl text-center font-bold mb-9 text-rose-500">Become Host Policy</h2>
        <ul className="list-none text-gray-600 font-medium grid lg:grid-cols-2 grid-cols-1 pl-6 gap-y-5 gap-x-5 text-xl capitalize">
          <li className="mb-2 mt-[2px]">
            <strong className='text-black'><i className="fa-solid fa-medal"></i> Quality Standards:</strong> <br /> Ensure your property meets a set of quality standards for a positive guest experience.
          </li>
          <li className="mb-2 ">
            <strong className='text-black'><i className="fa-solid fa-user-shield"></i> Guest Safety:</strong> <br /> Implement safety measures, such as fire extinguishers and secure locks, to ensure guest safety.
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-solid fa-hand-sparkles"></i> Cleanliness and Hygiene:</strong> <br /> Maintain high standards of cleanliness and hygiene for a welcoming environment in listing home stay.
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-solid fa-comment-dots"></i> Communication Responsiveness:</strong><br /> Commit to prompt responses to inquiries, bookings, and guest concerns. Make A Gentle Conversation With Guest.
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-regular fa-rectangle-list"></i> Accurate Listing Information:</strong><br /> Provide up-to-date and accurate information about amenities, rules, and limitations.
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-solid fa-hand-holding-heart"></i> Respectful and Inclusive Environment:</strong><br /> Foster a welcoming and inclusive atmosphere regardless of guest backgrounds. Respect & Give Priority Of Guest Demands
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-solid fa-bullhorn"></i> Compliance with Local Regulations:</strong><br /> Adhere to local laws, including tax obligations and safety requirements for guest home stay. Maintain Foreign Guest With Proper Verification.
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-solid fa-location-pin-lock"></i> Privacy and Security:</strong><br /> Respect guest privacy and provide secure storage options for personal belongings. Make Sure To Provide Guiding Security For Tourist guest
          </li>
          <li className="mb-2">
            <strong className='text-black'><i className="fa-regular fa-rectangle-xmark"></i> Flexible Cancellation Policies:</strong><br /> Offer flexible cancellations to accommodate changing guest plans. Make sure that guest can cancel his booking and get refund with cancellations charges.
          </li>
          <li className="mb-2 ">
            <strong className='text-black'><i className="fa-solid fa-building-circle-check"></i> Environmental Responsibility:</strong> <br /> Encourage eco-friendly practices, such as waste reduction and energy conservation.
          </li>
        </ul>

        <div>
   <p className="mt-14 text-lg text-center">
        If you have any questions or concerns about our Become Host Policy, please
        contact us at <span className='text-rose-500'>support@pinkhomestay.com</span>.
      </p>

      <p className="text-gray-500 text-lg mt-3 mb-9 text-center">
        This Become Host Policy was last updated on January 11, 2024.
      </p>
   </div>
      </div>
    </div>
  );
};

export default BecomeHostPolicyPage;
