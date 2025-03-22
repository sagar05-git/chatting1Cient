import toast from "react-hot-toast";
import AxiosInstance from "../utils/AxiosInstance";

export const signin = async (payload)=>{
    try {
        const response= await AxiosInstance.post('/auth/signin',payload)
        return response
    } catch (error) {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
    }
}

export const signup = async (payload)=>{
    try {
        const response= await AxiosInstance.post('/auth/signup',payload)
        return response
    } catch (error) {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
    }
}

export const getUsers = async ()=>{
    try {
        const response= await AxiosInstance.get('/user/get')
        return response
    } catch (error) {
        toast.error(error.response.data.error)
        throw new Error(error.response.data.error)
    }
}

export const logout = async ()=>{
    try {
        const response= await AxiosInstance.post('/auth/signout')
        return response
    } catch (error) {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
    }
}