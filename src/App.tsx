import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLoginPage from "./pages/auth/AdminLoginPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     </>
  );
}