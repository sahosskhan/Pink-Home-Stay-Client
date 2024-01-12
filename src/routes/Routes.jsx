import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getBookingRoom, getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import Statistics from '../pages/Dashboard/Common/Statistics'
import EditProfile from '../pages/Dashboard/Common/EditProfile'
import PrivacyPolicy from '../pages/Footer/PrivacyPolicy'
import TermsAndConditions from '../pages/Footer/TermsAndConditions'
import CookiesPolicyPage from '../pages/Footer/CP'
import BecomeHostPolicyPage from '../pages/Footer/BecomeHostPolicyPage'
import RefundCancelPolicyPage from '../pages/Footer/RefundCancelPolicyPage'
import Contact from '../pages/Footer/Contact'
import Team from '../pages/Footer/Team'
import BookingsRoom from '../pages/Dashboard/Guest/BookingsRoom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
      {
        path: '/bookings-room/:id',
        element: (
          <PrivateRoute>
            <BookingsRoom />
          </PrivateRoute>
        ),
        loader: ({ params }) => getBookingRoom(params.id),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-and-conditions', element: <TermsAndConditions /> },
  { path: '/cookies-policy', element: <CookiesPolicyPage /> },
  { path: '/become-host-policy', element: <BecomeHostPolicyPage/> },
  { path: '/refund-and-cancel-policy', element: <RefundCancelPolicyPage /> },
  { path: '/support-center', element: <Contact /> },
  { path: '/our-teams', element: <Team/> },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-room',
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddRoom />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-listings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile/edit-profile',
        element: (
          <PrivateRoute>
            <EditProfile/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <HostRoute>
            <ManageBookings />
          </HostRoute>
        ),
      },
    ],
  },
])
