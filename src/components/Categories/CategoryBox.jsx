/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'
/* eslint-disable react/prop-types */
const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = { ...currentQuery, category: label }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    })

    navigate(url)
  }
  params.get('category')
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-5
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${selected ? 'border-b-rose-500 text-rose-500' : ''}`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'> {label}</div>
    </div>
  )
}

export default CategoryBox
