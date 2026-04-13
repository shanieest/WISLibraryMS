import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";
import { borrowedBooks } from "../../data/books";

export default function BookBorrowed() {

    return(
        <div className="flex min-h-screen">      
            <Sidebar />
            <div className="flex flex-col flex-1">
                <HeaderPage />
            
                <main className="flex-1 p-10 bg-gray-50">                            
                    <h1 className="text-3xl font-bold font-serif text-[#ff7c08] tracking-wide">
                        Borrowed Books
                    </h1>
                    <div className="mt-6">
                        <button className="flex bg-[#ff7c08] text-white px-4 py-2 rounded-md hover:bg-[#e56b00] focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Add New Borrowing
                        </button>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 border-collapse">
                                <thead className="bg-gray-100">
                            <tr className="divide-x divide-gray-200">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Book Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Author
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Borrow Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {borrowedBooks.map((book) => (
                                        <tr key={book.id} className="hover:bg-orange-50/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{book.borrowDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{book.dueDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-[#ff7c08] text-white px-4 py-2 rounded-md hover:bg-[#e56b00] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    Return
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>        
            </div>
        </div>
    )
}