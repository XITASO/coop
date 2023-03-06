import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex flex-col">
      <h1>Hello World</h1>
      <Link className="block p-4 text-blue-500" to="/menu">Menu</Link>
    </main>
  );
}
