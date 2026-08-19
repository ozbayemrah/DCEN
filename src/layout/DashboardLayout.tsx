import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'
import ViewTabs from '../components/layout/ViewTabs'
import BottomNav from '../components/layout/BottomNav'

const fullName = 'John Tujien'
const company = 'UMBRELLA CORP'

export default function DashboardLayout() {
  const { pathname } = useLocation()
  const greeting = pathname === '/' ? 'Good Morning' : 'Good day'

  return (
    <div className="flex min-h-screen flex-col bg-[#eff2f9]">
      <div className="sticky top-0 z-30 bg-[#eff2f9]">
        <TopBar
          fullName={fullName}
          company={company}
          greeting={greeting}
          unreadCount={10}
          highPriorityCount={6}
        />
        <div className="border-b border-white px-4 py-3 lg:px-8">
          <ViewTabs />
        </div>
      </div>
      <div className="flex flex-1 gap-3 p-3 lg:gap-4 lg:p-4">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-3 lg:gap-4">
          <div className="flex flex-1 flex-col">
            <Outlet />
          </div>
        </div>
      </div>
      <BottomNav fullName={fullName} />
    </div>
  )
}
