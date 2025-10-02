import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/auth/SignUp";
import ProtectedRoute from "./components/protectedRoute";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
    
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}