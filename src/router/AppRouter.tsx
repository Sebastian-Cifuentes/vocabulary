import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth";
import { MainLayout, AuthLayout } from '../layouts';
import { MyCategories, NewWords, ProfilePage, ProgressWord, WordsList } from "../pages";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import { AuthStatus } from "../enum/AuthStatus.enum";


export const AppRouter = () => {
  
    const { status, checkAuthToken } = useAuthStore();
  
    useEffect(() => {
        // runs only once
        checkAuthToken();
      }, [])

    if ( status === AuthStatus.checking ) {
        return (
            <h3 aria-label="loading">Loading...</h3>
        )
    }
    

    return (
        <Routes>
            {
                (status === AuthStatus.notauthenticated)
                ? (
                    <>
                        <Route path="/auth" element={<AuthLayout />}>
                            <Route index path="/auth" element={<LoginPage />}></Route>
                            <Route path="/auth/register" element={<RegisterPage />}></Route>
                        </Route>
                        <Route path="/*" element={<Navigate to="/auth" />}></Route>
                    </>
                )
                : (
                    <>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<WordsList />}></Route>
                            <Route path="/profile" element={<ProfilePage />}></Route>
                            <Route path="/progress-word/:id" element={<ProgressWord />}></Route>
                            <Route path="/categories" element={<MyCategories />}></Route>
                            <Route path="/new-words" element={<NewWords />}></Route>
                        </Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </>
                )
            }

        </Routes>
    )
}
