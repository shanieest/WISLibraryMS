import { FaBars } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="bg-[#463b66] text-white w-64 p-6">
            <FaBars className="text-2xl mb-4 cursor-pointer" />
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="/Dashboard" className="block py-2 px-4 rounded hover:bg-[#ff7c08]">
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/Books" className="block py-2 px-4 rounded hover:bg-[#ff7c08]">
                            Books
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/Members" className="block py-2 px-4 rounded hover:bg-[#ff7c08]">
                            Members
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}