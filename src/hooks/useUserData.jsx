import {getSingleUser } from '../api/auth'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
const useUserData = () => {
  const { user, loading, refetch } = useAuth()
  const { data: userData, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getSingleUser(user?.email),
    queryKey: ['useData'],
  })

  return {userData, isLoading, refetch,}
}
 
export default useUserData
