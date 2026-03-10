import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";

export default function BookBorrowed(){
    return(
        <div className="flex min-h-screen">      
            <Sidebar />
                <div className="flex flex-col flex-1">
                    <HeaderPage />
            
                    <main className="flex-1 p-10 bg-gray-50">                            
                        <h1 className="text-3xl font-bold font-serif text-[#ff7c08] tracking-wide">
                            Borrowed Books
                        </h1>
                    </main>        
                </div>
        </div>
    )
}