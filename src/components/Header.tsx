import SearchBar from "./SearchBar";

export default function Header(){
 
    return(
        <header className="shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4">
                <SearchBar />

                <nav>
                    
                </nav> 
            </div>
        </header>
    )
}
