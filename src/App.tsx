import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Login from './pages/Login'
import Overview from './pages/Overview'
import GridMap from './pages/GridMap'
import DeploymentTracker from './pages/DeploymentTracker'
import LoadTest from './pages/LoadTest'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/grid" element={<GridMap />} />
        <Route path="/deployment" element={<DeploymentTracker />} />
        <Route path="/load-test" element={<LoadTest />} />
      </Route>
    </Routes>
  )
}
