import LandingPage from "./pages/LandingPage";
import AdminLoginPage from "./pages/auth/AdminLoginPage";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDeatils from "./pages/books/BookDetails";
import BookBorrowed from "./pages/books/BookBorrowed";
import BookReturned from "./pages/books/BookReturned";

export default function App(){
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/books/details" element={<BookDeatils />} />
        <Route path="/books/borrowed" element={<BookBorrowed />} />
        <Route path="/books/returned" element={<BookReturned />} />
      </Routes>
    </BrowserRouter>
     </>
  );
}