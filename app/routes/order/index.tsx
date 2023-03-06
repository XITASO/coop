import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { createOrder, getAllOrders } from "~/models/order.server";
import { Form, useLoaderData } from "@remix-run/react";

export async function loader() {
    const orders = await getAllOrders();
    if (!orders) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ orders });
}

export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    const title = formData.get("title");

    if (typeof title !== "string" || title.length === 0) {
        return json(
            { errors: { title: "Title is required", body: null } },
            { status: 400 }
        );
    }

    await createOrder({ title, notes: "" });
    return redirect(`/order`);
}

export default function Index() {
    const data = useLoaderData<typeof loader>();

    return (
        <>
            <NewOrder/>
            <h2 className="mt-2 text-4xl">Orders</h2>
            <ul>
                {data.orders.map((o, i) => (
                    <li key={i}>{o.title}</li>
                ))}
            </ul>
        </>
    );
}

function NewOrder() {
    return (
        <Form method="post">
            <span>Pizza:</span>
            <div>
                <input name="title" className="border px-2"/>
                <button type="submit" className="ml-2 bg-blue-700 text-white px-2">Add</button>
            </div>
        </Form>
    );
}