import { Header, Sidebar } from '../components';

export default function MainLayout({ children }: any) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  )
}