import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <nav className="flex">
            <Link className="block p-4 text-blue-500" to="/">Home</Link>
            <Link className="block p-4 text-blue-500" to="/menu">Menu</Link>
            <Link className="block p-4 text-blue-500" to="/order">Order</Link>
        </nav>
    );
}