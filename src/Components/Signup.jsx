import  { useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../Services/AuthServices'
import toast from 'react-hot-toast'


const Signup = () => {
    const [formData,setFormData]=useState({
        fullname:'',
        username:'',
        password:'',
        confirmpassword:'',
        gender:'male'
    })

    const [isPending, startTransition] = useTransition()
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        startTransition(async()=>{
            try {
                const response = await signup(formData)
                // console.log(response)
                if(response?.status ==="success"){
                    toast.success(response?.message)                  
                    navigate('/signin')
                    toast.success("Please Login")   
                }
            } catch (error) {
                console.log(error)
                
            }
        })
    }
  return (
    <div className='flex flex-col justify-center items-center  max-w-96 min-h-96 p-4 w-full h-auto  bg-purple-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100'>
    <div className="h-full w-full">
        <h1 className='text-3xl text-center text-gray-400 font-bold p-2 '>SignUp<span className='text-blue-900 underline'>ChatApp</span></h1>
        <form onSubmit={handleSubmit}>
            <label className='label sm:mt-2 '><span className='text-base label-text '>FullName</span></label>
            <input type='text' placeholder='FullName' name='fullname' onChange={handleChange}  className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <label className='label sm:mt-2 '><span className='text-base label-text '>UserName</span></label>
            <input type='text' placeholder='UserName' name='username'  onChange={handleChange}  className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <label className='label sm:mt-2'><span className='text-base label-text'>Password</span></label>
            <input type='text' placeholder='Password' name='password'  onChange={handleChange}  className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <label className='label sm:mt-2'><span className='text-base label-text'>Confirm Password</span></label>
            <input type='text' placeholder='Confirm Password' name='confirmpassword'  onChange={handleChange}  className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'/><br/>
            <label className='label sm:mt-2'><span className='text-base label-text'>Gender</span></label>
            <select name='gender'  onChange={handleChange} className='w-full p-2   bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 text-xl'>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
            <br/>
            <div className="flex justify-center mt-4">
            <button type='submit' className="btn btn-block glass p-2"><span className='text-blue-900 text-2xl font-bold'>SignUp</span></button>
            </div>
            <div className="flex justify-center p-2 sm:mt-2">
                If you already have account please do <Link to='/signin' className='font-bold cursor-pointer text-blue-900 sm:ml-1 underline'>{isPending?<span className='loading loading-spinner'></span>:'SignIn'}</Link>
            </div>
        </form>
    </div>
      
    </div>
  )
}

export default Signup
