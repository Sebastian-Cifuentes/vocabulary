import { Header, Sidebar } from '../components';
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-between flex-1">
        <Header />
        <main className="p-4 overflow-auto h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
      //   <div className="container-layout">
      //   <div className="header">
      //     <Header />
      //   </div>
      //   <div className="sidebar">
      //     <Sidebar />
      //   </div>
      //   <div className="content">
      //     <main className="pt-20 px-20 overflow-auto h-full">
      //       <Outlet />
      //     </main>
      //   </div>
      //   <div className="footer">
      //     <Footer />
      //   </div>
      // </div>
  )
}