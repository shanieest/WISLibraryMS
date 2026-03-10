import { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";

export default function BookDetails() {
    const [books] = useState([
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0-7432-7356-5" }
    ]);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <HeaderPage />

                <main className="flex-1 p-10 bg-gray-50">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold font-serif text-[#ff7c08] tracking-wide">
                            Book Details
                        </h1>
                        <button className="bg-[#ff7c08] text-white py-2 px-4 rounded hover:bg-[#e66b00] transition-colors">
                            Add Book
                        </button>
                    </div>

                    <div className="overflow-x-auto shadow-sm rounded-lg">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 border-b text-left">Title</th>
                                    <th className="py-3 px-4 border-b text-left">Author</th>
                                    <th className="py-3 px-4 border-b text-left">ISBN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{book.title}</td>
                                        <td className="py-2 px-4 border-b">{book.author}</td>
                                        <td className="py-2 px-4 border-b">{book.isbn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
