import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'
import ToolbarButtons from '../components/layout/ToolbarButtons'
import ViewTabs from '../components/layout/ViewTabs'
import BottomNav from '../components/layout/BottomNav'

const fullName = 'John Tujien'
const company = 'UMBRELLA CORP'

export default function DashboardLayout() {
  const { pathname } = useLocation()
  const greeting = pathname === '/' ? 'Good Morning' : 'Good day'

  return (
    <div className="flex min-h-screen flex-col bg-[#eff2f9]">
      <TopBar
        fullName={fullName}
        company={company}
        greeting={greeting}
        unreadCount={10}
        highPriorityCount={6}
      />
      <div className="flex flex-1 gap-4 p-4">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <ViewTabs />
            <ToolbarButtons />
          </div>
          <div className="flex flex-1 flex-col">
            <Outlet />
          </div>
        </div>
      </div>
      <BottomNav fullName={fullName} />
    </div>
  )
}
