import React, { useTransition } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { logout } from '../Services/AuthServices'
import { logoutt } from '../redux/slices/AuthSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const LogOut = () => {
    const[isPending,startTransition] =useTransition()
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleLogout=async()=>{
      startTransition(async()=>{
        try{
          const response=await logout()
          // console.log(response?.status==="success")
          if(response?.status==="success") {
            toast.success(response?.message)
            dispatch(logoutt())
            navigate('/signin')
          }
        }catch(err){
          console.log(err)
        }
       
      })
     
    }
  return (
    <div className='absolute bottom-2 left-1 '>
    {!isPending? <FaSignOutAlt onClick={handleLogout} className="text-4xl text-white cursor-pointer" title='Logout'/> :<span className='loading loading-spinner'></span>}
      
    </div>
  )
}

export default LogOut
