import LogoType from "../assets/Westfields Logotype V1.png";

export default function HeaderPage() {
    return(
        <header className="
        p-4 shadow-md">
            <img src={LogoType} alt="Westfields Logo" className="h-16 w-auto" />
        </header>
    );
}