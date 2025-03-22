import React, { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import socket from '../../utils/Sockets';
import { getLocalStorage } from '../../utils/LocalStorageUtils';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  // const loginUser = JSON.parse(localStorage.getItem("user")); // Logged-in user
  const loginUser =getLocalStorage("user");
  const senderId = loginUser?._id;
  // const receiverId = useSelector((state) => state.selectedChat.selectedUser?._id);
  const receiverId = getLocalStorage("selectedUser")._id;
  // const receiverId = getLocalStorage("selectedUser");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // console.log('Sending message:', message, senderId);
      // console.log('Sending message:', message, receiverId);
      
      socket.emit('sendMessage', { senderId, receiverId, message });
      setMessage(''); 
    }
  };

  return (
    <div className="w-full h-auto bottom-0 fixed">
      <form onSubmit={handleSubmit} className="w-full h-12 relative">
        <input
          type="text"
          placeholder="Type your Messages..."
          className="w-full h-full pl-4 pr-10 text-xl rounded-xl outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>
          <FaPaperPlane className="text-2xl text-green-800 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
