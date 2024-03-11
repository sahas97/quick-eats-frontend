import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layouts'
import Homepage from './pages/Homepage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'
import ManageRestaurantPage from './pages/ManageRestaurantPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero><Homepage /></Layout>} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path='/user-profile' element={<Layout showHero={false}>
                    <UserProfilePage />
                </Layout>} />
                <Route
                    path="/manage-restaurant"
                    element={
                        <Layout showHero={false}>
                            <ManageRestaurantPage />
                        </Layout>
                    }
                />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}