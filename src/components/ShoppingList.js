// Use useState hook to create state variable called selectedCategory to keep track of selected value from the <select> element. 
//When the value of the <select> element is changed, update state.

// You should also use the selectedCategory variable to determine which items to display in the shopping list. You'll need some way of filtering the array of items based on the selectedCategory.


import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const[filterBy, setFilerBy] = useState("All")
 
  function selectedCategory(event){
    setFilerBy(event.target.value)
  }

  const filterFood = items.filter(food => {
    //console.log(food.category)
    if(filterBy === "All"){
      return true
    } else {
      return food.category === filterBy
    }
  })

  console.log(filterFood)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterFood.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
