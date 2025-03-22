import axios from 'axios';
import { getLocalStorage } from './LocalStorageUtils';

// Create an Axios instance
const AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL:'https://chatting1-server.onrender.com/api/',
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json', // Default content type
    Accept: 'application/json',        // Default accept type
  },
  withCredentials: true, // Set credentials from
});

// Add a request interceptor (optional)
AxiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add a token to headers if available
    const token =getLocalStorage('token'); // Or any other method for storing tokens
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
AxiosInstance.interceptors.response.use(
  (response) => {
    // Any response transformations can be done here
    return response.data; // Return only the data
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default AxiosInstance;


// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie for cookie management

// // Create an Axios instance
// const AxiosInstance = axios.create({
//   // baseURL: 'http://localhost:3000/api/', // Replace with your API's base URL
//   baseURL:'https://chatting1-server.onrender.com/api/',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   withCredentials: true, // Allow cross-origin cookies
// });

// // Add a request interceptor
// AxiosInstance.interceptors.request.use(
//   (config) => {
//     // Example: Get token from cookies and set it in headers
//     const token = Cookies.get('jwt'); // Read cookie named 'auth_token'
//     // console.log(token,"token")
//     if (token) {
//       // console.log(token,"hello")
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// AxiosInstance.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     console.error('API Error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// export default AxiosInstance;
