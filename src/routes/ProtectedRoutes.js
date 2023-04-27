import { Navigate } from "react-router-dom"

export const ProtectedRoutes = ({children}) =>{
    const token =  sessionStorage.getItem("token")

   return  token ? children : <Navigate to= "/login"/>
}