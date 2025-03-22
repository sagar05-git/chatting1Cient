import { useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../Services/AuthServices'
import toast from 'react-hot-toast'
import { login } from '../redux/slices/AuthSlice'
import {useDispatch} from 'react-redux'


const Signin = () => {
    const [formData,setFormData]=useState({
        username:'',
        password:'', 
    })
    const [isPending, startTransition] = useTransition()
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        startTransition(async()=>{
            try {
                const response = await signin(formData)
                // console.log(response)
                if(response?.status ==="success"){
                    toast.success(response?.message)
                    dispatch(login(response))
                    navigate('/chat')
                }
            } catch (error) {
                console.log(error)
                
            }
        })

       
        
    }
  return (
    <div className='flex flex-col justify-center items-center  max-w-96 min-h-96 p-4 w-full h-auto  bg-purple-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 k'>
    <div className="h-full w-full">
        <h1 className='text-3xl text-center text-gray-400 font-bold p-4 '>Signin <span className='text-blue-900 underline'>ChatApp</span></h1>
        <form onSubmit={handleSubmit}>
            <label className='label mt-2 '><span className='text-base label-text '>UserName</span></label>
            <input type='text' placeholder='UserName' name='username' onChange={handleChange} className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <label className='label mt-2'><span className='text-base label-text'>Password</span></label>
            <input type='text' placeholder='Password' name='password'  onChange={handleChange} className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <div className="flex justify-center mt-4">
            <button type='submit' className="btn btn-block glass p-2"><span className='text-blue-900 text-2xl font-bold'>{isPending?<span className='loading loading-spinner'></span>:"SignIn"}</span></button>
            </div>
            <div className="flex justify-center p-2 mt-2">
                If you {"don't"} have account please do <Link to='/signup' className='font-bold cursor-pointer text-blue-900 ml-1 underline'>SignUp</Link>
            </div>
            <div className="flex justify-center p-2 mt-2 ">
            <span className='font-bold cursor-pointer text-blue-900 ml-1 underline text-xl'>Forget Password</span>
            </div>
        </form>
    </div>
      
    </div>
  )
}

export default Signin
