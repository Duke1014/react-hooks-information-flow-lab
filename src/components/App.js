import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [items, setItems] = useState(itemData);
  

  return (
    <div>
      <Header />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
