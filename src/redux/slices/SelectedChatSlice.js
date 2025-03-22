import { createSlice } from "@reduxjs/toolkit"
import { setLocalStorage } from "../../utils/LocalStorageUtils"

const initialState={
    selectedUser:null,
    messages:[],
    loading:false,
    error:null
}

const SelectedChatSlice=createSlice({
    name:'selectedChat',
    initialState,
    reducers:{
        selectUser:(state,action)=>{
            state.selectedUser=action.payload
            setLocalStorage("selectedUser",action.payload)
        },
    
    }
})
export default SelectedChatSlice.reducer
export const {selectUser }=SelectedChatSlice.actions