import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex">
            <Link className="block p-4 text-blue-500" to="http://localhost:3000">Home</Link>
            <Link className="block p-4 text-blue-500" to="http://localhost:3000/menue">Menü</Link>
            <Link className="block p-4 text-blue-500" to="http://localhost:3000/bestellung">Bestellung</Link>
        </nav>
    );
}