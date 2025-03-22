
// socket.js
import { io } from "socket.io-client";

const socket = io(`${import.meta.env.VITE_APP_BACKEND_MAINURL}/`);
socket.on("connect", () => {
  console.log(`Connected to server `);
});


export default socket;


// import { useMemo } from "react";
// import { io } from "socket.io-client";

// const useSocket = () => {
//   const socket = useMemo(() => {
//     const newSocket = io(`${import.meta.env.VITE_APP_BACKEND_MAINURL}/`);
    
//     newSocket.on("connect", () => {
//       console.log("Connected to server");
//     });

//     return newSocket;
//   }, []); // Empty dependency array ensures the socket instance is created only once

//   return socket;
// };

// export default useSocket;


// import useSocket from "../utils/useSocket";

// const MyComponent = () => {
//   const socket = useSocket();

//   return <div>Socket is Ready!</div>;
// };




