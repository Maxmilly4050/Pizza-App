import React from 'react';
import pizzaData from './data';
import './index.css'


function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  console.log(numPizzas);
  console.log(pizzas);

  return (
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
            <>
              <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
              </p>

              <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
              </ul>
            </>
        ) : (
            <p>We're still working on our menu. Please come back later :)</p>
        )}
      </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>

          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
      <footer className="footer">
        {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
        ) : (
            <p>
              We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
        )}
      </footer>
  );

}

function Order({ closeHour, openHour }) {
  return (
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
          online.
        </p>
        <button className="btn">Order</button>
      </div>
  );
}


function App() {
  return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
  );
}

export default App;
