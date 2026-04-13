import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";
import { returnedBooks } from "../../data/books";

export default function BookReturned() {
    return(
        <div className="flex min-h-screen">      
            <Sidebar />
                <div className="flex flex-col flex-1">
                    <HeaderPage />
            
                    <main className="flex-1 p-10 bg-gray-50">                            
                        <h1 className="text-3xl font-bold font-serif text-[#ff7c08] tracking-wide">
                            Returned Books
                        </h1>

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
                                                ISBN
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Return Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {returnedBooks.map((book) => (
                                            <tr key={book.id} className="hover:bg-orange-50/30 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{book.isbn}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{book.returnDate}</td>
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