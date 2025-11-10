import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { UserManagement } from './pages/admin/UserManagement';
import { CoachManagement } from './pages/admin/CoachManagement';
import { InterviewManagement } from './pages/admin/InterviewManagement';
import { BillingManagement } from './pages/admin/BillingManagement';
import { CareerHub, AnalyticsReports, SupportFeedback, SystemSettings } from './pages/admin/RemainingPages';

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/coaches" element={<CoachManagement />} />
          <Route path="/interviews" element={<InterviewManagement />} />
          <Route path="/billing" element={<BillingManagement />} />
          <Route path="/career" element={<CareerHub />} />
          <Route path="/analytics" element={<AnalyticsReports />} />
          <Route path="/support" element={<SupportFeedback />} />
          <Route path="/settings" element={<SystemSettings />} />
        </Routes>
      </AdminLayout>
    </Router>
  )
}

export default App
