import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth";
import { AuthStatus } from "../enum/AuthStatus.enum";
import { useAuthStore } from "../hooks";
import { useEffect } from 'react';
import { MainLayout } from '../layouts';
import { ProfilePage, WordsList } from "../pages";


export const AppRouter = () => {
  
    // const { status, checkAuthToken } = useAuthStore();
  
    // useEffect(() => {
    //     checkAuthToken();
    //   }, [])

    // if ( status === AuthStatus.checking ) {
    //     return (
    //         <h3 aria-label="loading">Loading...</h3>
    //     )
    // }
    

    return (
    
    <Routes>

        {
            // (status === AuthStatus.notauthenticated)
            (false)
            ? (
                <>
                    <Route path="/auth/login" element={<LoginPage />}></Route>
                    <Route path="/auth/register" element={<RegisterPage />}></Route>
                    <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
                </>
            )
            : (
                <>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<WordsList />}></Route>
                        <Route path="/profile" element={<ProfilePage />}></Route>
                    </Route>
                    <Route path="/*" element={<Navigate to="/" />}></Route>
                </>
            )
        }

    </Routes>

  )
}
