import { Header, Sidebar } from '../components';
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-between flex-1">
        <Header />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}