import Sidebar from "../components/Sidebar";
import HeaderPage from "../components/HeaderPage";
import { borrowedBooks, libraryBooks, returnedBooks } from "../data/books";

export default function Dashboard() {
  const stats = [
    {
      label: "Books Borrowed",
      value: borrowedBooks.length,
      description: "Active loans currently checked out",
    },
    {
      label: "Books Returned",
      value: returnedBooks.length,
      description: "Books returned to the library",
    },
    {
      label: "Total Books",
      value: libraryBooks.length,
      description: "Complete library catalog",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <HeaderPage />
        <main className="flex-1 p-10 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-serif text-[#ff7c08] tracking-wide">
              Dashboard
            </h1>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-gray-200 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-[#ff7c08]">{stat.value}</p>
                <p className="mt-3 text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
