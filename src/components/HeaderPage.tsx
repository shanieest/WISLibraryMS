import LogoType from "../assets/Westfields Logotype V1.png";
import { FaUser } from "react-icons/fa";

export default function HeaderPage() {
    return (
        <header className="flex items-center justify-between p-4 shadow-md bg-white">
            <img src={LogoType} alt="Westfields Logo" className="h-16 w-auto" />

            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FaUser className="text-xl" />
                <span className="font-medium">Logout</span>
            </button>
        </header>
    );
}
