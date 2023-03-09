export default function Overview() {
    // call database for orders
    const orders = [{ nameOfPizza: "Salami", numberOfPizzas: 2 },
    { nameOfPizza: "BBQ Chicken", numberOfPizzas: 2 },
    { nameOfPizza: "Margherita", numberOfPizzas: 1 }]
    return (
      <main className="relative min-h-screen bg-white sm:flex flex-col">
        <h1>Alle Bestellungen</h1>
        <ul>
            {
                orders.map((pizza, i)  => (
                    <li key={i}>Pizza {pizza.nameOfPizza} - {pizza.numberOfPizzas} mal</li>
                ))
            }
        </ul>
      </main>
    );
  }
  