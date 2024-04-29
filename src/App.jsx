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

const MIN_ITEMS = 1
// Maximo de elementos en el carrito, lo dejamos en una variable para utilizarlo y modificarlo mas facilmente
const MAX_ITEMS = 5

 // Creamos una función más descriptiva para agregar elementos al carrito de compras
 function addToCart(item) {

  const itemExists = cart.findIndex(guitar => guitar.id === item.id)
  if(itemExists >= 0) { // Existe en el carrito
    const updatedCart = [...cart]
    updatedCart[itemExists].quantity++
    setCart(updatedCart)
  }else {
    item.quantity = 1
    setCart([...cart, item])
  }
  
}

function removeFromCart(id) {
  // una vez eliminada la guitarra --> guitar.id !== id --> que sea diferente ya que queremos traernos las guitarras que aun estan en el carrito
  setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)) 
}

function decreaseQuantity (id) {
//utilizamos map para modificar el arreglo, sin cambiar el array original, si no el de la variable
  const updatedCart = cart.map( item => { 
    if(item.id === id && item.quantity < MAX_ITEMS) {
      return {
        ...item,
        quantity: item.quantity + 1
      }
    }
    // colocamos otro retum para que mantenga los otros elementos donde no aumente la cantidad
    return item
  })
  // Seteamos para que se mantenga todo en el carrito
  setCart(updatedCart)
}

function increaseQuantity (id) {
  const updatedCart = cart.map ( item => {
    if(item.id === id && item.quantity > MIN_ITEMS) {
      return {
        ...item,
        quantity: item.quantity - 1
      }
    }
    return item
  })
  setCart(updatedCart)
}

  return (
    <>
    <Header
      cart={cart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
    />

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
