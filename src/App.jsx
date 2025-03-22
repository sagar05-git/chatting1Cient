
// import { Toaster } from 'react-hot-toast'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import PrivateRoute from './Authentication/PrivateRoutes'
// import PublicRoute from './Authentication/PublicRoutes'
// import Signin from './Components/Signin'
// import Signup from './Components/Signup'
// import './App.css'
// import ChatPage from './Pages/ChatPage'
// import MessageContainer from './Components/Message/MessageContainer'

// const App = () => {

//   return (
//   <div className="w-full h-screen p-2 sm:p-4 flex justify-center items-center">
//     <BrowserRouter>
//       <Routes>
//       <Route element={<PublicRoute/>}>
//       <Route path="/" element={<Navigate to="/signin" replace />} /> {/* Redirect '/' to '/login' */}
//         {/* nested public route */}
//         <Route path="/signin" element={<Signin/>} />
//         <Route path="/signup" element={<Signup/>} />
//       </Route>
//       <Route element={<PrivateRoute/>}>
//         {/* nested private route */}
//         <Route path="/chat" element={<ChatPage/> } />
//         <Route path="/chat/message" element={<MessageContainer />} />
//       </Route>
//       </Routes>
//     </BrowserRouter>
//     <Toaster position='top-center'/>
//     </div>
//   )
// }

// export default App



import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './Authentication/PrivateRoutes'
import PublicRoute from './Authentication/PublicRoutes'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import './App.css'
import ChatPage from './Pages/ChatPage'
import MessageContainer from './Components/Message/MessageContainer'
import NotFound from './Pages/NotFound'

const App = () => {

  return (
  <div className="w-full h-screen p-2 sm:p-4 flex justify-center items-center">
    <BrowserRouter>
      <Routes>
      <Route element={<PublicRoute/>}>
      <Route path="/" element={<Navigate to="/signin" replace />} /> 
      {/* Redirect '/' to '/login' */}
        {/* nested public route */}
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
      <Route element={<PrivateRoute/>}>
        {/* nested private route */}
        <Route path="/chat" element={<ChatPage/> } />
        <Route path="/chat/message" element={<MessageContainer />} />
      </Route>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster position='top-center'/>
    </div>
  )
}

export default App
