import { useEffect } from "react";
import { FaArrowLeft, FaBackward, FaPhone, FaVideo } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/slices/SelectedChatSlice";

const MessageContainerHeader = ({ fullName, profilePic }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const isMobile = window.innerWidth < 768;

  const handleBack=()=>{
    dispatch(selectUser(null))
    navigate('/chat')
  }

  return (
    <div className="flex justify-between items-center w-full h-auto p-1 border-b-2">
      <div className="flex justify-start items-center">
        {isMobile && (
          <button
            className="mr-2 p-2"
            onClick={() => handleBack()}
          >
          <FaArrowLeft/>
          </button>
        )}
        <div className="border-2 border-black w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
          <img src={profilePic} className="object-cover w-full h-full" />
        </div>
        <div className="ml-2 text-2xl font-bold text-black">{fullName}</div>
      </div>
      <div className="flex justify-between items-center w-auto">
        <FaVideo className="text-2xl m-2 cursor-pointer" color="black" />
        <FaPhone className="text-2xl m-2 cursor-pointer" color="black" />
      </div>
    </div>
  );
};

export default MessageContainerHeader;
