import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, updateCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(cost, item){
    setTotal(total + cost)
    updateCart( arr => [...arr, item]);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    
      <div className="content">
        <div className="bakeryContainers">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem key={index} name={item.name} desc={item.description}
            price={item.price} image={item.image} total={total} click={addToCart}/>
          ))}
        </div>
        

        <div className="cart">
          <h2>Cart</h2>
          {/* {cart} */}
          {cart.map((item) => (
            <p>{item}</p>
          ))}
          <br/>
          <h3>Total Cost: ${total}</h3>
        </div>
      </div>
      
    </div>
  );
}

export default App;
