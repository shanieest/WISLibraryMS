import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
 
    return(
        <header className="shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4">
                <SearchBar />

                <nav>
                    
                </nav> 
            </div>
        </header>
    )
}