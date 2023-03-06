import { json } from "@remix-run/node";
import { getAllOrders } from "~/models/order.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {

    const orders = await getAllOrders();
    if (!orders) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ orders });
}

export default function Index() {
    const data = useLoaderData<typeof loader>();

    return (
        <>
            <h1>Orders:</h1>
            <ul>
                {data.orders.map((o, i) => (
                    <li key={i}>{o.title}</li>
                ))}
            </ul>
        </>
    );
}