import { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";

export default function BookDetails() {
    const [books] = useState([
        { title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            isbn: "978-0-7432-7356-5",
            price: "P10.99",
            publisher: "Scribner",
            publicationYear: "1925",
            physicalDescription: "180 pages; 20 cm",
            notes: "Classic novel set in the Jazz Age",
            subjectHeadings: "American literature, 20th century",
            remarks: "First edition",
        }
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

                    <div className="w-full shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white divide-y divide-gray-200">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr className="divide-x divide-gray-200">
                            {[
                                "Accession No.", "Call No.", "DDC Class", "Classification", 
                                "Author", "Other Author", "Book Title", "Price", "Publisher", 
                                "Place of Publication", "ISBN", "Publication Year", 
                                "Physical Description", "Notes", "Subject Headings", "Remarks"
                            ].map((header) => (
                                <th key={header} className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                                {header}
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {books.map((book, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors divide-x divide-gray-200">
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{index + 1}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">Call No. {index + 1}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">DDC Class {index + 1}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">Classification {index + 1}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.author}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">Other Author {index + 1}</td>
                                <td className="py-3 px-4 text-sm font-medium text-gray-900 max-w-xs truncate">
                                {book.title}
                                </td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.price}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.publisher}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">Place of Publication {index + 1}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.isbn}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.publicationYear}</td>
                                <td className="py-3 px-4 text-sm whitespace-nowrap">{book.physicalDescription}</td>
                                <td className="py-3 px-4 text-sm min-w-[200px]">{book.notes}</td>
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
