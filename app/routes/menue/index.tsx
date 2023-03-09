import Navbar from "~/navbar";

export default function Index(){

    const pizza = ["Salami", "4-Käse", "Funghi", "Hawai"];

    return(
        <>
            <Navbar></Navbar>
            <h1 className="text-2xl">Pizza: </h1>
            <ul className="ml-3 list-disc">
                {pizza.map(p => <li>{p}</li>)}
            </ul>
            
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <h1 className="text-2xl">Pasta: </h1>
        </>
    );
}