import { useState } from "react";
import { 
    FaBars, 
    FaChevronDown, 
    FaTachometerAlt, 
    FaBook, 
    FaInfoCircle, 
    FaHandHolding, 
    FaUndo 
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [booksOpen, setBooksOpen] = useState(false);

    const toggleBooks = () => {
        if (isOpen) {
            setBooksOpen(!booksOpen);
        } else {
            setIsOpen(true);
            setBooksOpen(true);
        }
    };

    return (
        <aside className={`bg-[#463b66] text-white p-4 transition-all duration-300 min-h-screen sticky top-0 ${isOpen ? "w-64" : "w-20"}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="mb-8 p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
                aria-label="Toggle Sidebar"
            >
                <FaBars className="text-2xl cursor-pointer" />
            </button>
            
            <nav>
                <ul className="space-y-2">
                    <li>
                        <NavLink 
                            to="/Dashboard" 
                            className={({ isActive }) => 
                                `flex items-center gap-4 py-3 px-4 rounded transition-all ${
                                    isActive ? "bg-[#ff7c08]" : "hover:bg-white/10"
                                }`
                            }
                        >
                            <FaTachometerAlt className="text-xl shrink-0" />
                            {isOpen && <span className="whitespace-nowrap">Dashboard</span>}
                        </NavLink>
                    </li>

                    <li>
                        <button 
                            onClick={toggleBooks}
                            className="w-full flex items-center justify-between py-3 px-4 rounded hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <FaBook className="text-xl shrink-0" />
                                {isOpen && <span className="whitespace-nowrap">Books</span>}
                            </div>
                            {isOpen && (
                                <FaChevronDown className={`transition-transform duration-200 ${booksOpen ? "rotate-180" : ""}`} />
                            )}
                        </button>

                        {isOpen && booksOpen && (
                            <ul className="ml-9 mt-1 space-y-1 border-l border-white/20 pl-4">
                                <li>
                                    <Link to="/books/details" className="flex items-center gap-2 py-2 hover:text-[#ff7c08] transition-colors">
                                        <FaInfoCircle size={14} /> Book Details
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/books/borrowed" className="flex items-center gap-2 py-2 hover:text-[#ff7c08] transition-colors">
                                        <FaHandHolding size={14} /> Borrowed
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/books/returned" className="flex items-center gap-2 py-2 hover:text-[#ff7c08] transition-colors">
                                        <FaUndo size={14} /> Returned
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
