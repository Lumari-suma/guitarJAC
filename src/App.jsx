/* eslint-disable no-unused-vars */
import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {

// State
// Al tener una db de forma local lo mandamos a llamar directamente --> useState(db)
const [data, setData] = useState(db)
const [cart, setCart] = useState([])

 // Creamos una función más descriptiva para agregar elementos al carrito de compras
 function addToCart(item) {

  const itemExists = cart.findIndex(guitar => guitar.id === item.id)
  if(itemExists >= 0) { // Existe en el carrito
    const updatedCart = [...cart]
    updatedCart[itemExists].quantity++
    setCart(updatedCart)
  }else {
    item.quantity = 1
  }
  setCart(prevCart => [...prevCart, item])
}

  return (
    <>
    <Header/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
          
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
