import { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";

export default function BookDetails() {
    const [open, setOpen] = useState(false);
    const [books] = useState([
        { 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            isbn: "978-0-7432-7356-5",
            price: "P10.99",
            publisher: "Scribner",
            publicationYear: "1925",
            physicalDescription: "180 pages; 20 cm",
            notes: "Classic novel set in the Jazz Age",
            subjectHeadings: "American literature, 20th century",
            remarks: "First edition",
        },

        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "978-0-06-112008-4",
            price: "P12.99",
            publisher: "J.B. Lippincott & Co.",
            publicationYear: "1960",
            physicalDescription: "281 pages; 21 cm",
            notes: "Award-winning novel",
            subjectHeadings: "American literature, 20th century",
            remarks: "First edition"

        },

        {
            title: "1984",
            author: "George Orwell",
            isbn: "978-0-452-28423-4",
            price: "P15.99",
            publisher: "Secker & Warburg",
            publicationYear: "1948",
            physicalDescription: "336 pages; 20 cm",
            notes: "Dystopian novel",
            subjectHeadings: "Science fiction, 20th century",
            remarks: "First edition"

        }
    ]);

    const headers = [
        "Accession No.", "Call No.", "DDC Class", "Classification", 
        "Author", "Other Author", "Book Title", "Price", "Publisher", 
        "Place of Publication", "ISBN", "Publication Year", 
        "Physical Description", "Notes", "Subject Headings", "Remarks"
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />

            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <HeaderPage />

                <main className="flex-1 p-4 md:p-10 overflow-y-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h1 className="text-2xl font-bold font-serif text-[#ff7c08] tracking-wide">
                            Book Details
                        </h1>
                        <button onClick={() => setOpen(true)} className="bg-[#ff7c08] text-white py-2 px-6 rounded shadow-md hover:bg-[#e66b00] transition-all active:scale-95">
                            Add Book
                        </button>

                        <div 
                            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                            onClick={() => setOpen(false)}
                        >
                            <div 
                                className="bg-white rounded-xl shadow-2xl max-w-md w-full relative flex flex-col max-h-[90vh]" 
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black z-10">
                                    ✕
                                </button>

                                <div className="p-8 pb-0">
                                    <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
                                </div>

                                <form className="space-y-4 overflow-y-auto p-8 pt-2 custom-scrollbar">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Publisher</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Physical Description</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                        <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" rows={3}></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Headings</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7c08]" />
                                    </div>
                                    
                                    <div className="pt-2">
                                        <button type="submit" className="w-full bg-[#ff7c08] text-white py-2 px-4 rounded hover:bg-[#e66b00] transition-all active:scale-95">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 border-collapse">
                                <thead className="bg-gray-100">
                                    <tr className="divide-x divide-gray-200">
                                        {headers.map((header) => (
                                            <th 
                                                key={header} 
                                                className="py-3 px-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {books.map((book, index) => (
                                        <tr key={index} className="hover:bg-orange-50/30 transition-colors divide-x divide-gray-200">
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-gray-600">{index + 1}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-gray-600">Call-{index + 1}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-gray-600">DDC-{index + 1}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-gray-600">Class-{index + 1}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap font-medium">{book.author}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-gray-600">-</td>
                                            <td className="py-3 px-4 text-sm font-semibold text-gray-900 min-w-[200px]">
                                                {book.title}
                                            </td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap text-[#ff7c08] font-bold">{book.price}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">{book.publisher}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">Manila</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap font-mono text-xs">{book.isbn}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">{book.publicationYear}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">{book.physicalDescription}</td>
                                            <td className="py-3 px-4 text-sm min-w-[250px] italic text-gray-500">{book.notes}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">{book.subjectHeadings}</td>
                                            <td className="py-3 px-4 text-sm whitespace-nowrap">{book.remarks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}