import React, { useEffect, useMemo, useState } from "react";
import { getMessages } from "../../Services/MessagesServices";
import { useSelector } from "react-redux";
import { getLocalStorage } from "../../utils/LocalStorageUtils";
import socket from "../../utils/Sockets";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatConversation = () => {
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  // const user = useSelector((state) => state.selectedChat.selectedUser);
  const user=getLocalStorage('selectedUser')
  const { _id: chatUserId } = user;

  const loginUser = getLocalStorage("user"); // Logged-in user
  const loginUserId = loginUser?._id; // Logged-in user's ID
  const senderId = loginUser?._id;

  // Fetch Messages
  const getMessage = async () => {
    const response = await getMessages(chatUserId);
    if (response?.status === "success") {
      // console.log(response)
      setMessages(response.allMessages);
      setParticipants(response.participants);
    } else {
      setMessages([]);
    }
  };

  useEffect(() => {
    getMessage();
  }, [chatUserId]);

  useEffect(() => {
    if (senderId) {
      socket.emit("joinRoom", senderId);
      // console.log(`Joined Room: ${senderId}`);
    }

    socket.on('newMessage', (msg) => {
      // console.log("hellllllllllllllllll")
      // console.log("Received new message:", msg);
      setMessages((prev) => [...prev, msg]);
    });
    
    return () => {
      // socket.disconnect()
      // socket.off()
      socket.off('newMessage');
    };
  }, [senderId]); 

  // Find Sender Details
  const getSenderDetails = (senderId) => {
    return participants.find((user) => user._id === senderId);
  };

  const renderMessages = (msg) => {
    const sender = getSenderDetails(msg.senderId);

    return (
      <div
        key={msg._id}
        className={`chat ${msg.senderId === loginUserId ? "chat-end" : "chat-start"}`}
      >
        <div className="chat-image avatar px-1">
          <div className="w-10 rounded-full">
            <img
              alt={sender?.fullname || "User"}
              src={sender?.profilePic || "/default-profile.png"}
            />
          </div>
        </div>
        <div className="chat-header">
          {sender?.fullname || "Unknown"}
          <time className="text-xs mx-1 opacity-50">
            {new Date(msg.createdAt).toLocaleTimeString()}
          </time>
        </div>
        <div className="chat-bubble">{msg.message}</div>
        <div className="chat-footer opacity-50">
          {msg.senderId === loginUserId ? "Sent" : "Received"}
        </div>
      </div>
    );
  };

  return (
    // max-h-screen-minus-9
    // <div className="w-full h-full   max-h-[calc(100vh-9rem)] overflow-auto">
    // {/* <div className="w-full h-[calc(100vh-10rem)] overflow-auto p-2"> */}
    //   {messages.map((msg) => renderMessages(msg))}
    // </div>
    <ScrollToBottom className="w-full h-full max-h-[calc(100vh-9rem)] overflow-auto">
      {messages.map((msg) => renderMessages(msg))}
    </ScrollToBottom>
  );
};

export default ChatConversation;
