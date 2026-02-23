import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
 
    return(
        <header className="shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4">
                <SearchBar />

                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav> 
            </div>
        </header>
    )
}