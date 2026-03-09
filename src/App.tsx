import LandingPage from "./pages/LandingPage";
import AdminLoginPage from "./pages/auth/AdminLoginPage";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
     </>
  );
}