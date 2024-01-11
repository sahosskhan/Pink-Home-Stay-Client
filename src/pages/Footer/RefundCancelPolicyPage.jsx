
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const RefundCancelPolicyPage = () => {
  return (
    <div className=" container mx-auto p-4 capitalize">
                   <Helmet>
        <title>Executive Team | Pink Home Stay</title>
      </Helmet>
         <div className="mb-4">
      <img src="https://i.ibb.co/HHLdxs5/Blue-Modern-Hawaii-Traveler-Youtube-Thumbnail.png" alt="Banner" className="w-full mb-4 rounded-lg" />

      <nav className="text-gray-600 font-semibold text-xl text-center my-8">
        <Link to="/" className="hover:text-rose-500">
        <i className="fa-solid fa-house-chimney"></i>  Home
        </Link>
        <span className="mx-2"> <i className="fa-solid fa-angle-right"></i> </span>
        <span className='text-rose-500'><i className="fa-solid fa-money-bill-transfer"></i> Refund & Cancel Policy</span>
      </nav>
    </div>

      {/* Refund & Cancel Policy Content */}
      <div className="container bg-rose-50 rounded-lg mx-auto p-8">
        <h1 className="text-3xl text-rose-500 text-center font-semibold mb-4">Refund & Cancel Policy</h1>

        <p className="mb-6 text-lg text-center ">
          At Pink Home Stay, we prioritize your satisfaction and aim to make your
          experience as seamless as possible. <br /> Please review our Refund & Cancel
          Policy for a clear understanding of our terms.
        </p>
        <p className="mb-6 text-xl  p-6 bg-rose-200  rounded-md ">
        <i className="fa-solid text-rose-500   fa-triangle-exclamation"></i> Pink Home Stay reserves the right to cancel reservations in the event of
          unforeseen circumstances, including but not limited to property
          emergencies or issues that may impact the safety of guests.
        </p>
        <h2 className="text-2xl font-semibold mb-2"><i className="fa-regular fa-rectangle-xmark"> </i> Cancellation Policy</h2>
        <p className="mb-6 text-lg">
          Guests can cancel their reservation up to 48 hours before the scheduled
          check-in time and receive a full refund. Cancellations made within 48
          hours of the check-in time will result in a charge for the first night&apos;s
          stay. In case of unforeseen circumstances, such as emergencies or
          natural disasters, please contact us as soon as possible for special
          considerations.
        </p>

        <h2 className="text-2xl font-semibold mb-2"><i className="fa-solid fa-hand-holding-dollar"></i> Refund Policy</h2>
        <p className="mb-6 text-lg">
          If a guest decides to check out early, they will be refunded for the
          remaining nights within 24 hours of the early check-out. No refunds
          will be provided for no-shows. Refunds for cancellations will be issued
          to the original payment method and may take 5-7 business days to process
          and appear in your account.
        </p>

        <h2 className="text-2xl font-semibold mb-2"><i className="fa-solid fa-sliders"></i> Modification of Reservations</h2>
        <p className="mb-6 text-lg">
          Guests may modify their reservations, including changes to the check-in
          and check-out dates, subject to availability and any applicable rate
          differences. Any modifications should be made at least 48 hours before
          the scheduled check-in time.
        </p>

 

        <p className="mb-6 text-xl border-2 p-6 rounded-md text-center  border-rose-500">
        <i className="fa-solid text-rose-500 fa-headphones-simple"></i> For any questions or concerns regarding our Refund & Cancel Policy,
          feel free to contact  <br /> our customer support team at
          <a href="mailto:support@pinkhomestay.com" className="text-rose-500"> support@pinkhomestay.com</a>.
        </p>
      </div>
    </div>
  );
};

export default RefundCancelPolicyPage;
