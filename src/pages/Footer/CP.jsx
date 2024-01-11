// CookiesPolicyPage.jsx

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiesPolicyPage = () => {
  return (
    <div className="container mx-auto p-4 capitalize">
          <Helmet>
        <title>Cookies Policy | Pink Home Stay</title>
      </Helmet>
    <div className="mb-4">
      <img src="https://i.ibb.co/Mg6wb0X/Blue-And-White-Modern-Travel-Facebook-Fundraiser-Cover-Photo.jpg" alt="Banner" className="w-full mb-4 rounded-lg" />

      <nav className="text-gray-600 font-semibold text-xl text-center my-8">
        <Link to="/" className="hover:text-rose-500">
        <i className="fa-solid fa-house-chimney"></i>  Home
        </Link>
        <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
        <span className='text-rose-500'><i className="fa-solid fa-cookie-bite"></i> Cookies Policy</span>
      </nav>
    </div>

    <div className="bg-rose-50 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-rose-500">Cookies Policy</h1>

      <ul className="list-disc pl-6 space-y-5 text-xl">
      <li>By using Pink Home Stay, you agree to comply with and be bound by the following cookies policy.</li>
      <li>We use cookies to improve your browsing experience.</li>
          <li>Cookies help us analyze website traffic and optimize performance.</li>
          <li>We use essential cookies for the proper functioning of our website.</li>
          <li>Analytics cookies help us understand how visitors interact with the site.</li>
          <li>Advertising cookies are used to personalize ads and measure their effectiveness.</li>
          <li>We respect Do Not Track signals and do not use tracking cookies without consent.</li>
          <li>Cookies are used for authentication and to remember user preferences.</li>
          <li>We do not sell or share your cookie data with third parties.</li>
          <li>You can control and manage cookies through your browser settings.</li>
          <li>We provide clear information about the types of cookies we use.</li>
          <li>By using our site, you consent to the use of cookies in accordance with our policy.</li>
          <li>We update our Cookies Policy to reflect changes in the use of cookies.</li>
          <li>Session cookies are temporary and deleted when you close your browser.</li>
          <li>Persistent cookies remain on your device for a specified period.</li>
          <li>We provide an option to opt-out of non-essential cookies.</li>
          <li>Third-party cookies may be used for additional functionalities.</li>
          <li>Our Cookies Policy is reviewed regularly to ensure compliance with regulations.</li>
          <li>We notify users of any significant changes to our Cookies Policy.</li>
          <li>For more information, you can contact us regarding our Cookies Policy.</li>
      </ul>



      <div>
   <p className="mt-14 text-lg text-center">
        If you have any questions or concerns about our Cookies Policy, please
        contact us at <span className='text-rose-500'>support@pinkhomestay.com</span>.
      </p>

      <p className="text-gray-500 text-lg mt-3 mb-9 text-center">
        This Cookies Policy was last updated on January 11, 2024.
      </p>
   </div>

    </div>
  </div>
  );
};

export default CookiesPolicyPage;
