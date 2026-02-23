import { useState } from "react";

export default function SearchBar() {
  const [category, setCategory] = useState("Author");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const data = {
    Author: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien"],
    Title: ["Harry Potter", "Game of Thrones", "The Lord of the Rings"],
    Subject: ["Mathematics", "Science", "Algorithms"],
  };

  const handleSearch = () => {
    const filtered = data[category].filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="flex flex-col items-start space-y-3">
      
      <div className="flex items-center space-x-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded px-2 py-1 border"
        >
          <option value="Author">Author</option>
          <option value="Title">Title</option>
          <option value="Subject">Subject</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${category.toLowerCase()}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-2 py-1 border-[#ff7c08]"
        />

        <button
          onClick={handleSearch}
          className="bg-[#ff7c08] text-white px-4 py-1 rounded"
        >
          Search
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <ul className="bg-white shadow-md rounded p-3 w-full text-black">
          {results.map((item, index) => (
            <li key={index} className="py-1 border-b last:border-none">
              {item}
            </li>
          ))}
        </ul>
      )}

      {results.length === 0 && query && (
        <p className="text-sm text-gray-400">No results found.</p>
      )}
    </div>
  );
}
