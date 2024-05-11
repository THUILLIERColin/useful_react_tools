import { Link } from "react-router-dom";
import logo from "../assets/Useful_Components_Library.png";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Useful Components Library
          </span>
        </Link>
      </div>
    </nav>
  );
}
