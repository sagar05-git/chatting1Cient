import React, { useEffect, useState, useTransition } from 'react'
import { getUsers } from '../Services/AuthServices'
import {useDispatch} from 'react-redux'
import { selectUser } from '../redux/slices/SelectedChatSlice'
import socket from '../utils/Sockets'

const Conversation = () => {
    const[isPending,startTransition]=useTransition()
    const[conversation,setConversation]=useState([])
    const dispatch=useDispatch()

    const getCon=async()=>{
      startTransition(async()=>{
        try{
          const response=await getUsers()
          if(response?.status==='success'){
            setConversation(response?.users)
          }
        }catch(error){
          console.error(error)
        }
      })

    }
    useEffect(()=>{
      getCon()
    },[])
    const handleSelectedUser=(item)=>{
      // console.log(item)
      dispatch(selectUser(item))
    }

    
  return (
    <>
    {conversation?.map((item,index)=>{
      return (
        <React.Fragment key={item._id}>
        {/* <div className={`w-full h-auto flex justify-center items-center p-1 cursor-pointer hover:bg-sky-500 ${isSelected ? 'bg-sky-500':''}`} > */}
        <div className={`w-full h-auto flex justify-center items-center p-1 cursor-pointer hover:bg-sky-500 `} onClick={()=>handleSelectedUser(item)}>
        <div className='flex justify-start items-center w-full h-auto p-1 pl-2 pr-2  ' >
          <div className="border-2 border-black w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
            <img
              src={item.profilePic}
              alt='dp'
              className="object-cover w-full h-full"
            />
          </div>
          {/* max-w-[8ch] truncate */}
          <div className="pl-4 text-xl  text-white font-bold">
          {item.fullname}
          </div>
          {/* <div>on/off</div> */}
        </div>
        </div>
        <div className={`${index === conversation.length - 1?'':'divider my-0 py-0 h-1'}`} ></div>
        </React.Fragment>
      );
    })}
    {isPending ?<div className="flex justify-center items-center"><span className="loading loading-spinner"></span></div>:null}
</>
  )
}

export default Conversation

