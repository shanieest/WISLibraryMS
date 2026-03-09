import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/AdminLoginPage');
  };

  return (
    <header className="shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <SearchBar />
        <div>
          <button
            type="button"
            onClick={handleLoginClick} 
            className="bg-[#ff7c08] text-white px-4 py-2 rounded hover:bg-[#e66e07] transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
