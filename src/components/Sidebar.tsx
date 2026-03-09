import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [booksOpen, setBooksOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate("/books/details");
    };


    return (
        <aside className={`bg-[#463b66] text-white p-6 transition-all duration-300 min-h-screen ${isOpen ? "w-64" : "w-20"}`}>
            <FaBars 
                className="text-2xl mb-8 cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)} 
            />
            
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="/Dashboard" className="block py-2 px-4 rounded hover:bg-[#ff7c08] transition-colors">
                            {isOpen ? "Dashboard" : "D"}
                        </a>
                    </li>

                    <li className="mb-2">
                        <button 
                            onClick={() => { if(isOpen) setBooksOpen(!booksOpen) }}
                            className="w-full flex items-center justify-between py-2 px-4 rounded hover:bg-[#ff7c08] transition-colors"
                        >
                            <span>{isOpen ? "Books" : "B"}</span>
                            {isOpen && <FaChevronDown className={`transition-transform ${booksOpen ? "rotate-180" : ""}`} />}
                        </button>

                        {isOpen && booksOpen && (
                            <ul className="ml-4 mt-2 space-y-1 border-l border-white/20">
                                <li><a href="/books/details" className="block py-1 px-4 hover:text-[#ff7c08]">Book Details</a></li>
                                <li><a href="/books/borrowed" className="block py-1 px-4 hover:text-[#ff7c08]">Borrowed Books</a></li>
                                <li><a href="/books/returned" className="block py-1 px-4 hover:text-[#ff7c08]">Returned Books</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
