
import SearchBar from './SearchBar'
import Conversation from './Conversation'
import LogOut from './LogOut';
const Sidebar = () => {
  return (
    <div 
    className='w-full h-full bg-purple-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-purple-100 overflow-hidden lg:w-1/3  lg:h-full md:w-1/2 ' >
    <SearchBar/>
    <div className="divider px-2 mt-1"></div>
    <div className='max-h-screen-minus-13 sm:max-h-96 md:max-h-120 h-full overflow-auto'>
    <Conversation />
    </div>
    <div className="divider px-2 mt-1"></div>
    <LogOut/>
    
    </div>
  )
}

export default Sidebar
