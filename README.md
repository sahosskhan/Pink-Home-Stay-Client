# Pink Home Stay - An online marketplace for short- and long-term homestays and experiences.  

## Description
Pink Home Stay is a MERN (MongoDB, Express.js, React.js, Node.js) stack project designed to manage & promote short- and long-term homestay experiences business. It provides a platform for administrators, host & guest to efficiently deal & consume homestay services. There are some features like booking management, room management, and secure payment methods, Bite Cafe aims to be a comprehensive solution for managing & giving best service for user in homestay experiences 

## Source Code:
## [ Client Side Code](https://github.com/sahosskhan/Pink-Home-Stay-Client)

## [ Server Side Code](https://github.com/sahosskhan/Pink-Home-Stay-Server)

## Preview: 
## [ Client Side Preview](https://pink-home-stay.web.app)

## [ Server Side Preview](https://pink-stay-home-server.vercel.app)


# Features

## Admin Dashboard

### Email: admin@pink-home-stay.web.app
### Password: Sahoss@123


### Statistics
- Admin can see highlight of all host & website info like total sales, total user, total bookings, total rooms.
- Admin can see statistics of sale over time & see a calender to choose time like date. (all room )

### Manage Users
- Admin can update user role & status



## Host Dashboard

## Email: host@pinkhomestay.web.app
## Password: Host@123


### Statistics
- Host can see highlight of own hosted info like total sales, total bookings, total rooms, last hosted time.
- Host can see statistics of sale over time & see a calender to choose time like date. ( own added room )

### Add Room
- Host can add room with upload room image from local machine using imgbb.

### My Listings
- Host can see all own added room.
- Host can revmove any room from them.
- Host can update deatils of any room from them.

### Manage Bookings
- Host can see all booking room by guest which one he added
- Host can reject any booking
- Host can see invoice of booking & downlaod it



## Guest Dashboard

## Email: guest@pinkhomestay.web.app
## Password: Guest@123


### Statistics
- Guest can see highlight of own booking room info like total spent, total bookings, total rooms, last booked Time.
- Host can see statistics of sale over time & see a calender to choose time like date. ( own booked room )

### My Bookings
- Guest can see own booking room deatils
- Guest can cancel any booking
- Guest can see invoice of booking & downlaod it

### Become A Host
- Guest can submit a proposal for become host
- Once submit any proposal then can not resubmit it (show 
" Please!, Wait for admin approval ")



## Profile Card
- Any User can see details about him also add new information about him.
- Any User can update his details.

## First Time Open
- show a advertisement as popup when user first time visit in his device
- show cookies pollicy as popup when user first time visit in his device


## Payment Method
- Stripe payment method available for secure transactions.

## Database Operations
- MongoDB CRUD operations & aggregate operations for efficient data management.

## User Authentication
- Firebase for secure user custom authentication & user social authentication .

## Authorization
- JWT ( JSON WEB TOKEN ) for secure, authorized & valid user access on the site as authorization

## Technology Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **DaisyUI**: It adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values.

- **Axios**: Promise-based HTTP client for making AJAX requests.
- **TanStack Query**: Powerful asynchronous state management & handling API requests, pending and error states, and more. 

- **Hot Toast**: Add beautiful notifications to your React app with react-hot-toast. Lightweight. Smoking hot by default.
- **Swiper JS**: Swiper is the most modern free mobile touch slider with hardware-accelerated transitions and amazing native behavior.
- **Recharts**: A composable charting library built on React components.
- **Date-FNS**: date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js. 
- **html2canvas**: The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser. The screenshot is based on the DOM and as such may not be 100% accurate.

- **React Hook From**: A react-based performant, flexible and extensible form with easy-to-use validation.
- **React Router DOM**: Declarative routing for React applications.
- **React Stripe JS**:  React Stripe.js is a thin wrapper around Stripe Elements. It allows you to add Elements to any React app.

- **React Icons**: popular icon packs using ES6 imports.
- **React Spinner**: A collection of react loading spinners. React Spinners. by David Hu. yarn add react-spinners. 
- **React Modal**: popular icon packs using ES6 imports.Accessible modal dialog component for React.JS.
- **React Date Range**: A date library agnostic React component for choosing dates and date ranges. Uses date-fns for date operations.
- **React Google Charts**: A thin, typed, React wrapper for Google Charts. version downloads license bundle size. 



### Backend
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: Fast, un-opinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Morgan**: HTTP request logger middleware for node.js.
- **Nodemailer**: Nodemailer is a module for Node.js to send emails.

### Authentication
- **Firebase Authentication**: A service that provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
- **JSON Web Tokens (JWT)**: Compact, URL-safe means of representing claims to be transferred between two parties.

### Payment Processing
- **Stripe**: A technology company that builds economic infrastructure for the internet.

### Other Tools
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env.
- **npm**: A package manager for Node.js packages.
- **CORS**: Its is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options



## Project Setup Or Run On Your Local Machine
1. Clone the repository:
    ```
    git clone https://github.com/sahosskhan/Pink-Home-Stay-Client.git (client)
    git clone https://github.com/sahosskhan/Pink-Home-Stay-Server.git (server)
    ```
2. Navigate to the project directory:
    ```
    cd Pink-Home-Stay-Client (client)
    cd Pink-Home-Stay-Server (server)
    ```
3. Install all dependencies:
    ```
    npm install
    ```
4. Set up environment variables:
    - Create a `.env.local`(client) or `.env`(server) file in the root directory.
    - Define the all env variables according to you.
5. Start the server:
    ```
    npm run dev (client)
    nodemon (server)
    ```
6. Navigate to `http://localhost:5173/` (client) `http://localhost:5000` (server) in your browser to view the application.

## Contributors
- [sahosskhan](https://github.com/sahosskhan)

## License
This project is licensed under the [MIT License](https://github.com/sahosskhan).

## Acknowledgements
- This project was inspired by the need for a comprehensive gaming contest management platform.
- Special thanks to the creators of MongoDB, Express.js, React.js, and Node.js for their incredible frameworks.
- Thanks to Firebase for providing secure authentication services.
- Thanks to Stripe for their secure payment processing solution.

## Support
For any inquiries or issues, please contact [sahosskhan359@email.com](mailto:sahosskhan359@email.com).







