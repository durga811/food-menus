import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [updateMenu, setUpdateMenu] = useState(items);
  // const filterItem = items.filter((item) => {
  //   return item.category == category;
  // });
  function updateCategory(itemCategory) {
    // setCategory(itemCategory);
    // console.log(itemCategory);
    setUpdateMenu(() => {
      if (itemCategory === "all") {
        return items;
      } else {
        return items.filter((item) => {
          return item.category === itemCategory.toLowerCase();
        });
      }
    });
  }

  return (
    <main>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories updateCategory={updateCategory} />
      <div className="section-center">
        {updateMenu.map((item) => (
          <Menu item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
