import React, {useState} from "react";

function Item({ name, category }) {
  const[inBasket, setInBasket] = useState(false)

  function handleBasket(){
    setInBasket((inBasket) => !inBasket)
  }

  const basket = inBasket? "in-cart" : ""

  const cart = inBasket? "Remove From Cart" : "Add to Cart"

  return (
    <li className={basket}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleBasket}className="add">{cart}</button>
    </li>
  );
}

export default Item;
