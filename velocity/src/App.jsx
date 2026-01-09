import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverviewDashboard from './pages/OverviewDashboard';
import IssueDetail from './pages/IssueDetail';
import AutoFix from './pages/AutoFix';
import ComplianceAudit from './pages/ComplianceAudit';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewDashboard />} />
        <Route path="/analytics" element={<OverviewDashboard />} />
        <Route path="/issues" element={<IssueDetail />} />
        <Route path="/auto-fix" element={<AutoFix />} />
        <Route path="/compliance" element={<ComplianceAudit />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

