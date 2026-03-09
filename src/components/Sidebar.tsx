import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`bg-[#463b66] text-white p-6 transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
            <FaBars 
                className="text-2xl mb-8 cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)} 
            />
            
            <nav>
                <ul>
                    {['Dashboard', 'Books', 'Members'].map((item) => (
                        <li key={item} className="mb-2">
                            <a href={`/${item}`} className="block py-2 px-4 rounded hover:bg-[#ff7c08] whitespace-nowrap overflow-hidden">
                                {isOpen ? item : item[0]} 
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
