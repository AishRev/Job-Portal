import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import JobListPage from './Pages/JobListPage';
import ProfilePage from './Pages/ProfilePage';
import DashboardPage from './Pages/DashboardPage';
import { AuthProvider } from './context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;