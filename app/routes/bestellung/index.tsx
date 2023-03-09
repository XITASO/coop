import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { createOrder, getAllOrders } from "~/models/order.server";
import { Form, useLoaderData } from "@remix-run/react";
import Navbar from "~/navbar";

export async function action({ request }: ActionArgs){
    const formData = await request.formData();
    console.log("hello World");
    
    const title = formData.get("bestellung");

    if (typeof title !== "string" || title.length === 0) {
        return json(
            { errors: { title: "Title is required", body: null } },
            { status: 400 }
        );
    }
    const notes = "";
    await createOrder({title, notes});
    return redirect("/bestellung");
}

export async function loader() {
    const allData = await getAllOrders();
    return json(allData);
}

export default function Index() {
    const data = useLoaderData<typeof loader>();
    console.log(data);
    
  return (
    <main className="relative min-h-screen bg-white sm:flex flex-col">
      <Navbar></Navbar>
      <h1>Bestellung</h1>
      <Form method="post">
        <input name="bestellung" className="border"/>
        <button type="submit" className="border mx-3 px-2 bg-blue-500 text-white">Ok</button>
      </Form>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <ul className="ml-3 list-disc">
        {data.map(d => <li>{d.title}</li>)}
      </ul>
    </main>
  );
}
