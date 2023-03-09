import { getAllOrders } from "~/models/order.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return getAllOrders();
};

export default function Index() {
  const orders = useLoaderData<typeof loader>();

  return (
    <main className="relative min-h-screen bg-white sm:flex flex-col">
      <h1 className="font-bold text-2xl mb-3">Orders</h1>
      <ul>
        {orders.map(order => <li>{order.title}</li>)}

      </ul>
    </main>
  );
}
