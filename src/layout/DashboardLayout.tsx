import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'
import ToolbarButtons from '../components/layout/ToolbarButtons'
import ViewTabs from '../components/layout/ViewTabs'

export default function DashboardLayout() {
  const { pathname } = useLocation()
  const greeting = pathname === '/' ? 'Good Morning' : 'Good day'

  return (
    <div className="min-h-screen bg-[#eff2f9]">
      <TopBar
        fullName="John Tujien"
        company="UMBRELLA CORP"
        greeting={greeting}
        unreadCount={10}
        highPriorityCount={6}
      />
      <div className="flex gap-4 p-4">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <ViewTabs />
            <ToolbarButtons />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
