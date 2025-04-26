import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./index.css";

// Pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import TestsListPage from "./pages/TestsListPage";
import TestPage from "./pages/TestPage";

// Protected route component
const RequireAuth = ({ children, adminRequired = false }: { children: JSX.Element, adminRequired?: boolean }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (adminRequired && !user.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

// Admin route component
const AdminRoute = ({ children }: { children: JSX.Element }) => {
  return <RequireAuth adminRequired={true}>{children}</RequireAuth>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<RequireAuth><UserDashboard /></RequireAuth>} />
          <Route path="/tests" element={<RequireAuth><TestsListPage /></RequireAuth>} />
          <Route path="/test/:id" element={<RequireAuth><TestPage /></RequireAuth>} />
          <Route path="/results/:id" element={<RequireAuth><div>Results Page</div></RequireAuth>} />
          <Route path="/history" element={<RequireAuth><div>History Page</div></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><div>Profile Page</div></RequireAuth>} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminRoute><div>Admin Dashboard</div></AdminRoute>} />
          <Route path="/admin/tests" element={<AdminRoute><div>Manage Tests</div></AdminRoute>} />
          <Route path="/admin/questions" element={<AdminRoute><div>Manage Questions</div></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><div>Manage Users</div></AdminRoute>} />

          {/* 404 page */}
          <Route path="*" element={<div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">404</h1>
              <p className="mt-2 text-lg text-gray-600">Page not found</p>
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-700"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 