import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <>
      <h1>Hello World</h1>
      <p>
        No note selected. Select a note on the left, or{" "}
        <Link to="new" className="text-blue-500 underline">
          create a new note.
        </Link>
      </p>
    </>
  );
}
