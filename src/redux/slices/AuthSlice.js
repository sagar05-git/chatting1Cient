import { createSlice } from "@reduxjs/toolkit"
import { removeLocalStorage, setLocalStorage } from "../../utils/LocalStorageUtils";


const initialState={
    isAuthenticated:false,
    user:null,
    token:null
}

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated = true;
            state.user=action.payload.user;
            state.token=action.payload.token
            setLocalStorage("token",action.payload.token)
            setLocalStorage("user",action.payload.user)
            setLocalStorage("isAuthenticated",true)
        },
        logoutt:(state,action)=>{
            state.isAuthenticated = false;
            state.user=null
            removeLocalStorage("user")
            removeLocalStorage("token")
            removeLocalStorage("isAuthenticated")
            localStorage.clear();
        }
    }
})
export default AuthSlice.reducer;
export const{login,logoutt} =AuthSlice.actions;