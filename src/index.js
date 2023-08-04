import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//escrevemos componetes usando funcoes
// devera sempre comecar com letra maisculuta e deve retornar sempre algo e sempre retorno dentro de paranteses

// vamos dividir o site em componetes

function Header() {
  // podemos <h1 style={{ color: "red" }} usar isto para estelisar ou importar um file css que tem estilos e chamar estes estilos onde precisamos, no seu componete:

  return (
    <header className="header">
      <h1>Munguambe Pizzaria.</h1>
    </header>
  );
}

// vamos usar thernary operator para renderizar condicionalmente a parte do programa
//fragmento, colocar uma tag sem entar na tree do html
function Menu() {
  const pizzas = pizzaData;
  //const pizzas=[];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Mneu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p> We're still working on our menu</p>
      )}
      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrrms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />*/}
    </main>
  );
}
function Pizza({ pizzaObject }) {
  console.log(pizzaObject);

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOULD OUT" : pizzaObject.price}</span>
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
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to see welcome you between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00 Come and Visit us or order online.
      </p>
      <button className="btn">
        <a
          rel="noreferrer"
          target="_blank"
          className="link"
          href="mailto:harrison.munguambe17@gmail.com"
        >
          Order
        </a>
      </button>
    </div>
  );
}
//isOpen && <p>Open</p> se isOpen for verdadeiro vai executar o p, se nao, ele deixa.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//PROPS
//devem ter mesmo nome- quando passado e recebido
//funcionam como heranca, quando filhos usam dados do pai, e estes nao podem mudar o seu estado.
//o que pode mudar sao states
// nunca usar os props para mudar estado dos args

// map vai criar um novo array que vai retornar cada elemento do array e vai criar um elemento para cada nova pizza e renderizar tudo do objecto.

// renderizar como base numa condicao (&&) or thernary operator

// podemos usar mais de um return, mas so podemos retornar um de cada vez

// mas vamos usar thernary e
