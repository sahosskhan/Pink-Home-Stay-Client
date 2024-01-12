import { useLoaderData } from "react-router-dom";
import logoImg from '../../../assets/images/logo.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect } from "react";

const BookingsRoom = () => {
    const bookingsRoom = useLoaderData()
    const nameFile = bookingsRoom?.title + " " +"Invoice"
    const generatePDF = () => {
      const inputElement = document.getElementById('pdf-content');
      const scaleFactor = 2;
  
      html2canvas(inputElement, { scale: scaleFactor }).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
        pdf.save(nameFile);
      });
    };
  
    useEffect(() => {
      // This will ensure that the function is defined after the component mounts
      window.generatePDF = generatePDF;
    }, []);

    const inputDate = new Date(bookingsRoom?.from);
    const inputDate2 = new Date(bookingsRoom?.to);
    const inputDate3 = new Date(bookingsRoom?.date);
const dateOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};
const formattedDate = inputDate.toLocaleDateString('en-US', dateOptions);
const formattedDate2= inputDate2.toLocaleDateString('en-US', dateOptions);
const formattedDate3= inputDate3.toLocaleDateString('en-US', dateOptions);
const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};
const formattedTime = inputDate.toLocaleTimeString('en-US', timeOptions);
const formattedTime2 = inputDate2.toLocaleTimeString('en-US', timeOptions);
const formattedTime3 = inputDate3.toLocaleTimeString('en-US', timeOptions);
const differenceInMilliseconds = Math.abs(inputDate - inputDate2);
const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return (
        <div  className="bg-white  m-10">
<div className="flex justify-end items-end mb-4 -mt-10">
  <button  onClick={generatePDF} className="bg-rose-500 py-2 px-6 text-xl text-white font-bold rounded">Download </button>
</div>



<div id="pdf-content" className="bg-rose-50 p-6 rounded-md">

<div className="flex  justify-end items-end my-1">
<h1 className="text-lg text-black font-bold bg-rose-300 w-96 px-6 py-2 rounded-md ">Order Time: {formattedDate3}, {formattedTime3}</h1>
</div>

<div className=" flex  justify-center items-center lg:-mt-10 md:mt-2 mt-1">
<h1 className="text-lg text-black">
<div className="flex justify-center items-center">
<img
        className="w-36 "
        src={logoImg}
        alt='logo'
      />
</div>
<p className="text-4xl text-center font-bold text-rose-500">Pink Home Stay</p>
<p className="text-center text-lg">20/1, Lawrence Lane, Thanapara,  
Kushtia, Khulna.</p>
<p className="text-gray-600 text-center">support@pink-home-stay.com</p>
</h1>
</div>


<div className="mt-6 text-lg text-black">
<h1 className="bg-rose-300 py-2 px-6 text-xl font-bold rounded-md">Guest Info</h1>
<h1 className="text-lg text-black mt-6"> 
<p className="text-2xl font-bold text-rose-500">{bookingsRoom?.guest?.name}</p>
<p>{bookingsRoom?.guest?.address}</p>
<p className="text-rose-400">{bookingsRoom?.guest?.email}</p>
<p className="text-rose-400">+{bookingsRoom?.guest?.phone}</p>
</h1>
</div>

<div className="mt-6 text-lg text-black">
<h1 className="bg-rose-300 py-2 px-6 text-xl font-bold rounded-md">Host Info</h1>
<h1 className="text-lg text-black mt-6"> 
<p className="text-2xl font-bold text-rose-500">{bookingsRoom?.hostName}</p>
<p className="text-rose-400">{bookingsRoom?.host}</p>
</h1>
</div>

<div className="mt-6 text-lg text-black">
<h1 className="bg-green-300 py-2 px-6 text-xl font-bold rounded-md">Payment Info</h1>
<div className="flex lg:flex-row md:flex-row flex-col justify-between my-5">
<h1 className="text-xl font-semibold text-green-500">Transaction ID: <span className="text-lg text-black font-medium">#{bookingsRoom?.transactionId}</span></h1>
<h1 className="text-xl font-semibold text-green-500 lg:mt-0 md:mt-0 mt-3">Payment Method: <span className="text-lg text-black font-medium">Visa Card (Stripe)</span></h1>
</div>


</div>


<div className="mt-6 text-lg text-black">
<h1 className="bg-gray-300 py-2 px-6 text-xl font-bold rounded-md">Order Info</h1>
<div className="mt-6 flex lg:flex-row md:flex-row flex-col justify-between">
<h1 className="text-xl font-semibold ">Order ID: <span className="text-lg text-black font-medium">#{bookingsRoom?._id}</span></h1>
<h1 className="text-xl font-semibold ">Room ID: <span className="text-lg text-black font-medium">#{bookingsRoom?.roomId}</span></h1>
</div>
<h1 className="bg-gray-300 py-2 px-6 mt-6 text-xl font-bold rounded-md">Ordered Room Info</h1>
<div className="mt-4 space-y-4">

<div className="flex gap-2 lg:flex-row md:flex-row flex-col justify-between">
<h1 className="text-xl font-semibold text-black">Room : <span className="text-lg text-black font-medium">{bookingsRoom?.title} </span></h1>
<h1 className="text-xl font-semibold text-black">Location : <span className="text-lg text-black font-medium">{bookingsRoom?.location} </span></h1>

</div>

<div className="flex gap-2 lg:flex-row md:flex-row flex-col justify-between">
<h1 className="text-xl font-semibold text-black">Total Reservation : <span className="text-lg text-black font-medium">{differenceInDays} days</span></h1>
<h1 className="text-xl font-semibold text-black">Reserve Validation: <span className="text-lg text-black font-medium"> {formattedDate}, {formattedTime} - {formattedDate2}, {formattedTime2}  </span></h1>
</div>

<div className="flex gap-2 lg:flex-row md:flex-row flex-col justify-between">
<h1 className="text-xl font-semibold text-black">Price: <span className="text-lg text-black font-medium">{bookingsRoom?.price} $ </span></h1>
<h1 className="text-xl font-semibold text-black">Paid: <span className="text-lg text-black font-medium">{bookingsRoom?.price} $ </span></h1>
<h1 className="text-xl font-semibold text-black">Due: <span className="text-lg text-black font-medium">0 $ </span></h1>
</div>
</div>





</div>

</div>
        </div>
    );
};

export default BookingsRoom;