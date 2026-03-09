import LogoType from "../assets/Westfields Logotype V1.png";

export default function HeaderPage() {
    return(
        <header className="bg-white text-white p-4">
            <img src={LogoType} alt="Westfields Logo" className="h-16 w-auto" />
        </header>
    );
}