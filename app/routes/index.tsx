import { Link } from "react-router-dom";
import Navbar from "~/navbar";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex flex-col">
      <Navbar></Navbar>
      <h1>Hello World</h1>
      <p>It works!</p>
    </main>
  );
}
