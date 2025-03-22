import MessageInput from './MessageInput';
import ChatConversation from './ChatConversation';
import MessageContainerHeader from './MessageContainerHeader';
import { useEffect, useState } from 'react';
import NoChatSelected from './NoChatSelected';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../../utils/LocalStorageUtils';
const MessageContainer = () => {
  const[fullName,setFullName]=useState()
  const [profilePic,setProfilePic]=useState()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const ChatSelected=useSelector((state)=>state?.selectedChat?.selectedUser)
  const ChatSelected=getLocalStorage('selectedUser');
  const navigate=useNavigate()
  useEffect(() => {
    if (ChatSelected) {

      const { fullname,profilePic } = ChatSelected;
      setFullName(fullname);
      setProfilePic(profilePic);
    }
  }, [ChatSelected]);

  
  // Handle window resize to adjust for different screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Redirect to /chat on larger screens when MessageContainer is mounted
  useEffect(() => {
    if (!isMobile) {
      navigate('/chat');
    }
  }, [isMobile, navigate]);
  
  return (
    <div className="w-full h-full  overflow-hidden bg-purple-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 ml-0 lg:w-3/5 lg:ml-6 md:w-1/2 md:ml-2">

    {ChatSelected ?
    (<>
      <MessageContainerHeader fullName={fullName} profilePic={profilePic}/>
      <ChatConversation/>
      <MessageInput/>
    </>):(!isMobile && <NoChatSelected/>)
    }
    </div>
  );
}

export default MessageContainer
