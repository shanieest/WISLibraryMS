type Books = {
    id: number;
    title: string;
    author: string;
};

    const books: Books[] = [
        {
            id: 1,
            title: "The Girl in Snow",
            author: "Sandara Lunata"
        },
        {
            id: 2,
            title: "The Silent Garden",
            author: "Elena Marchetti"
        },
        {
            id:3,
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling"
        }
    ]

export default function SectionBooks() {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-4">
            {books.map((book) => (
                <div key={book.id} className="card-body bg-white shadow-md rounded-lg p-4">
                    <img src="src\assets\book-cover.jpg" alt="Book Cover" className="h-40 object-cover mb-2" />
                    <h2 className="card-title text-lg font-bold">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                </div>

        )     )}
        </section>
    )
}