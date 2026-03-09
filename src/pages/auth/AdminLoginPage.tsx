
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/Westfields Badge.png";


export default function AdminLoginPage() {
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");

    const validateForm = (email: string, password: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        setError("");
        return true;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const emailInput = (document.getElementById("email") as HTMLInputElement).value;
        const passwordInput = (document.getElementById("password") as HTMLInputElement).value;
        
        if (validateForm(emailInput, passwordInput)) {
            navigate("/Dashboard");
        }
    };

    return (
        <div className="bg-[#463b66] min-h-screen flex items-center justify-center p-10 rounded shadow-md radius-lg col-span-12">
            <div className="flex items-center justify-center bg-white rounded shadow-md ">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email" aria-required="true">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password" aria-required="true">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <button type="submit" onClick={handleLogin}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            Login
                        </button>
                    </form>
                </div>
                <img src={logo} alt="Westfields Logo" className="h-50 w-auto mb-6" />
                <h1 className="text-2xl font-bold font-serif text-[#463b66] text-justify">
                    Westfields International <br />
                    School Library
                </h1>
            </div>
        </div>
    );
}