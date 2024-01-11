import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4 capitalize ">
                   <Helmet>
        <title>Terms & Conditions | Pink Home Stay</title>
      </Helmet>
      <div className="mb-4">
        <img src="https://i.ibb.co/Mg6wb0X/Blue-And-White-Modern-Travel-Facebook-Fundraiser-Cover-Photo.jpg" alt="Banner" className="w-full mb-4 rounded-lg" />
  
        <nav className="text-gray-600 font-semibold text-xl text-center my-8">
          <Link to="/" className="hover:text-rose-500">
          <i className="fa-solid fa-house-chimney"></i>  Home
          </Link>
          <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
          <span className='text-rose-500'><i className="fa-solid fa-clipboard-list"></i>  Terms & Conditions</span>
        </nav>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-rose-500">Terms & Conditions</h1>

        <ul className="list-disc pl-6 space-y-5 text-xl">
          <li>By using Pink Home Stay, you agree to comply with and be bound by the following terms and conditions.</li>
          <li>All users must be at least 18 years old to use our platform.</li>
          <li>You are responsible for maintaining the security of your account and password.</li>
          <li>Users must provide accurate and complete information when creating an account.</li>
          <li>Any abusive or illegal activities on the platform will result in immediate account termination.</li>
          <li>Pink Home Stay is not responsible for the content provided by hosts or users.</li>
          <li>Users are responsible for their own safety during homestays and experiences.</li>
          <li>Cancellation policies for bookings are set by individual hosts and must be adhered to.</li>
          <li>Payments made through the platform are secure, and any issues should be reported promptly.</li>
          <li>Users are prohibited from spamming or engaging in any form of unauthorized advertising on the platform.</li>
          <li>Intellectual property rights of Pink Home Stay must be respected by all users.</li>
          <li>Any modification, suspension, or discontinuation of the platform will be communicated to users.</li>
          <li>Users agree not to reproduce, duplicate, copy, sell, or exploit any part of the platform without explicit permission.</li>
          <li>Pink Home Stay reserves the right to modify these terms at any time without prior notice.</li>
          <li>Users are responsible for checking the terms regularly for updates.</li>
          <li>Disputes between users and hosts should be resolved amicably; Pink Home Stay is not responsible for such disputes.</li>
          <li>Any violation of the terms may result in the suspension or termination of your account.</li>
          <li>The platform may use cookies to enhance user experience; users can manage cookie preferences in their browser settings.</li>
          <li>These terms constitute the entire agreement between users and Pink Home Stay.</li>
          <li>If any provision of these terms is found to be invalid, the remaining provisions will continue to be valid and enforceable.</li>
        </ul>



        <div>
     <p className="mt-14 text-lg text-center">
          If you have any questions or concerns about our Terms & Conditions, please
          contact us at <span className='text-rose-500'>support@pinkhomestay.com</span>.
        </p>

        <p className="text-gray-500 text-lg mt-3 mb-9 text-center">
          This Terms & Conditions was last updated on January 11, 2024.
        </p>
     </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
