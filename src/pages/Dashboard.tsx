import Sidebar from "../components/Sidebar";
import HeaderPage from "../components/HeaderPage";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">      
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        <HeaderPage />
        <main className="flex-1 p-10 bg-gray-50">                            
          <h1 className="text-3xl font-bold font-serif text-[#ff7c08] tracking-wide">
            Dashboard
          </h1>

          <div>
            <p className="text-lg leading-relaxed text-gray-700 mt-4 font-serif"></p>
          </div>
        </main>
      </div>
    </div>
  );
}
