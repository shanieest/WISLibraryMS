import { useState } from "react";

export default function SearchBar() {
    const [category, setCategory] = useState("Author");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(false);

    const data = {
        Author: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien"],
        Title: ["Harry Potter", "Game of Thrones", "The Lord of the Rings"],
        Subject: ["Mathematics", "Science", "Algorithms"],
    }
    
    return(
         <div className="flex items-center space-x-2">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded px-2 py-1">
            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="Subject">Subject</option>
        </select>
        <input 
            type="text" 
            placeholder={`Search by ${category.toLowerCase()}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-1 border-[#ff7c08] py-1"
        />
        <button onClick={() => setResults(true)} className="bg-[#ff7c08] text-white px-4 py-1 rounded">
            Search
        </button>
    </div>
    )
}
