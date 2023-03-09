import { Form } from "@remix-run/react";
import { ActionArgs } from "@remix-run/server-runtime";
import { createOrder } from "~/models/order.server";
import { json, redirect } from "@remix-run/node";

const pizzas = ["Margherita", "BBQ Chicken", "Salami", "Vegan", "Speciale", "Michi"]

export async function action({ request }: ActionArgs) {
    const formData =await request.formData();
    const pizzaValue = formData.get('pizzaSelect');
    console.log(pizzaValue);
    return redirect(`/order`);
}

export default function Index() {
    return (
      <main className="relative min-h-screen bg-white sm:flex flex-col">
        <p>Bestelle eine Pizza</p>
        <Form method="post">
            <span>Menü</span>
                <div>
                    {
                        pizzas.map((pizza, i) => (
                            <div key={i+1}>
                            <input type="radio" name="pizzaSelect" value={i + 1} />
                            <label> Pizza {pizza}</label>
                            </div>
                        ))
                    }
                    
                <button type="submit" className="ml-2 mt-2 bg-blue-700 text-white px-2">Pizza Bestellen</button>
                </div>
        </Form>
      </main>
    );
  }
  