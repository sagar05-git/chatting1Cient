import { configureStore } from "@reduxjs/toolkit";
import authreducer from '../slices/AuthSlice.js';
import selectedchatreducer from '../slices/SelectedChatSlice.js'
const store=configureStore({
    reducer:{
        auth:authreducer,
        selectedChat:selectedchatreducer,
    }
})
export default store