import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});


api.interceptors.request.use((config : any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

api.interceptors.response.use((config) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry ) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get<any>(`https://localhost:8000/api/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          return api.request(originalRequest);
      } catch (e) {
        console.log(e)
      }
  }
  throw error;
}) 