import axiosSecure from '.'

// Save user data in database
export const saveUser = async user => {
  const currentUser = {
    email: user.email,
    name:user.displayName,
    photo:user.photoURL,
    uid:user.uid,
    role: 'guest',
    status: 'Verified',
    phone:'none',
    address:'none',
    dob:'none',
    gender:'none',
    acc:'none',
    pay:'none',
    about:'none',
    cover:'https://i.ibb.co/GRP7k0L/Blue-Modern-Hawaii-Traveler-Youtube-Thumbnail.png',
  }
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

  return data
}

// Get token from server
export const getToken = async email => {
  const { data } = await axiosSecure.post(`/jwt`, { email })
  console.log('Token received from server------>', data)
  return data
}

// Clear token from browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout')
  return data
}

// Get user role
export const getRole = async email => {
  const { data } = await axiosSecure(`/user/${email}`)
  return data.role
}

// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure('/users')
  return data
}

// Get single user
export const getSingleUser = async email => {
  const { data } = await axiosSecure(`/user/${email}`)
  return data
}
// Save user data in database
export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: 'Verified',
  }
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
  return data
}

// become a host
export const becomeHost = async email => {
  const currentUser = {
    email,
    status: 'Requested',
  }
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
  return data
}
