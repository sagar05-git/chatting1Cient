import toast from "react-hot-toast";
import AxiosInstance from "../utils/AxiosInstance";

export const sendMessage = async (id,payload)=>{
    try {
        const response= await AxiosInstance.post(`/messages/send/${id}`,payload)
        return response
    } catch (error) {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
    }
}


export const getMessages = async (id)=>{
    try {
        const response= await AxiosInstance.get(`/messages/get/${id}`)
        return response
    } catch (error) {
        toast.error(error.response.data.message)
        throw new Error(error.response.data.message)
    }
}

// export const sendMessage = async (id, payload) => {
//     try {
//       const response = await AxiosInstance.post(
//         `/messages/send/${id}`,
//         JSON.stringify(payload), // Convert payload to JSON string
//         {
//           headers: {
//             "Content-Type": "application/json", // Ensure proper headers
//           },
//         }
//       );
//       return response;
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//       throw new Error(error.response?.data?.message || "Request failed");
//     }
//   };