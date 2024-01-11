
import { Helmet } from 'react-helmet-async';
import { FaCommentsDollar, FaLink, FaUserCog } from 'react-icons/fa';
import { FaHandsHoldingChild, FaMoneyBillTransfer } from "react-icons/fa6";
import { GrDocumentStore, GrShieldSecurity } from 'react-icons/gr';
import { MdOutlineDataExploration, MdWifiTetheringErrorRounded } from 'react-icons/md';
import { TbDatabaseCog, TbDatabaseImport, TbDatabaseShare, TbDatabaseStar, TbExchange, } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
  
        <div className="container mx-auto p-4 capitalize">
        <Helmet>
        <title>Privacy Policy | Pink Home Stay</title>
      </Helmet>
          <img
            className="mx-auto mb-4 "
            src="https://i.ibb.co/HHLdxs5/Blue-Modern-Hawaii-Traveler-Youtube-Thumbnail.png"
            alt="Privacy Policy Banner"
          />
      </div>
      <div className="container mx-auto mt-8 px-5">
      <nav className="text-gray-600 font-semibold text-xl text-center my-8">
          <Link to="/" className="hover:text-rose-500">
          <i className="fa-solid fa-house-chimney"></i>  Home
          </Link>
          <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
          <span className='text-rose-500'><i className="fa-solid fa-shield-halved"></i> Privacy Policy</span>
        </nav>

        <h1 className="text-3xl text-center font-semibold mb-4">Privacy Policy</h1>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500 "><TbDatabaseImport className='mt-1' />Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information, including personal
          information such as your name, contact details, and payment
          information. We may also collect non-personal information related to
          your use of our services.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2"> <TbDatabaseCog className='mt-1'/>How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect for purposes such as processing
          bookings, providing customer support, improving our services, and
          conducting research. Your information may also be used for marketing
          and promotional activities with your consent.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500 "> <TbDatabaseShare className='mt-1' />Data Sharing</h2>
        <p className="mb-4">
          We may share your information with third parties, including hosts,
          service providers, and business partners, to facilitate your
          bookings and enhance your overall experience. We ensure that these
          third parties adhere to privacy and security standards.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2"> <GrShieldSecurity className='mt-1'/>Security Measures</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, alteration, and
          destruction. Our security protocols are regularly reviewed and
          updated.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500"> <FaUserCog className='mt-1' />User Controls</h2>
        <p className="mb-4">
          You have the right to access, modify, and delete your personal
          information. We provide tools and settings within your account to
          manage your preferences and privacy controls.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 "><TbExchange className='mt-1'/>Changes to Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy periodically. Any significant
          changes will be communicated to you, and the updated policy will be
          effective upon posting on our website.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500"><FaLink className='mt-1'/>Third Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these sites.
          Please review the privacy policies of third-party websites before
          providing any personal information.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 "><FaHandsHoldingChild className='mt-[3px]'/>Children&apos;s Privacy</h2>
        <p className="mb-4">
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children. If you
          believe that a child has provided us with their information, please
          contact us, and we will take appropriate action.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500"><FaMoneyBillTransfer className='mt-1'/> International Transfers</h2>
        <p className="mb-4">
          Your information may be transferred and processed in countries outside
          of your home country. By using our services, you consent to the
          transfer of your information to these countries, which may have
          different data protection laws than your jurisdiction.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 "><GrDocumentStore className='mt-1' />Retention of Data</h2>
        <p className="mb-4">
          We retain your personal information for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500"><FaCommentsDollar className='mt-1'/>Marketing Communications</h2>
        <p className="mb-4">
          With your consent, we may send you marketing communications about our
          products, services, and promotions. You can opt-out at any time by
          adjusting your communication preferences in your account settings.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 "> <TbDatabaseStar className='mt-1' />Data Accuracy</h2>
        <p className="mb-4">
          We strive to ensure the accuracy of the information we collect. You
          have the right to request corrections to your inaccurate or incomplete
          personal information by contacting our support team.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 text-rose-500"><MdOutlineDataExploration className='mt-1'/>Data Portability</h2>
        <p className="mb-4">
          Upon request, we will provide you with a copy of your personal
          information in a structured, commonly used, and machine-readable
          format, allowing you to transfer it to another service.
        </p>

        <h2 className="text-xl flex gap-2 font-semibold mb-2 "><MdWifiTetheringErrorRounded className='mt-1' />Compliance with Laws</h2>
        <p className="mb-4">
          We comply with applicable data protection laws and regulations,
          including the General Data Protection Regulation (GDPR) and other
          relevant frameworks.
        </p>
    
     <div>
     <p className="mt-9 text-lg text-center">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at <span className='text-rose-500'>support@pinkhomestay.com</span>.
        </p>

        <p className="text-gray-500 text-lg mt-3 mb-9 text-center">
          This Privacy Policy was last updated on January 11, 2024.
        </p>
     </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
