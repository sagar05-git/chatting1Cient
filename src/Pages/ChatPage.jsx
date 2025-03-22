import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import MessageContainer from '../Components/Message/MessageContainer'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const ChatSelected = useSelector((state) => state?.selectedChat?.selectedUser);
    const navigate = useNavigate();
  
    // Handle window resize to adjust for different screens
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Navigate to message container when a chat is selected on mobile
    useEffect(() => {
      if (isMobile && ChatSelected) {
        navigate("/chat/message");
      }
    }, [ChatSelected, isMobile, navigate]);

  return (
<div className='flex justify-center items-center flex-wrap w-full h-full sm:h-[550px] md:h-[650px] md:flex-nowrap '>

<Sidebar/>  
{!isMobile && <MessageContainer/>}

  
</div>
  )
}

export default ChatPage
