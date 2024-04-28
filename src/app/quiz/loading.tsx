import { FaSpinner } from 'react-icons/fa'

export default function Loading() {

  return (
    <div className='flex py-28 justify-center'>
      <FaSpinner className='text-5xl text-info animate-spin' />
    </div>
  )
}