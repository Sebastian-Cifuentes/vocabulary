import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth";
import { MainLayout, AuthLayout } from '../layouts';
import { MyCategories, NewWords, ProfilePage, ProgressWord, WordsList } from "../pages";


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
            (true)
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
