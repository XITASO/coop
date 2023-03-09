import { Link } from '@remix-run/react'

export default function Navigation() {
    return (
      <main className="flex">
        <Link className="block p-4 text-blue-500" to="/">Home</Link>
        <Link className="block p-4 text-blue-500" to="/overview">Alle Bestellungen</Link>
        <Link className="block p-4 text-blue-500" to="/order">Pizza Bestellen</Link>
      </main>
    );
  }
  