function Menu() {
  const menuItems = [
    { name: "Crispy Calamari", price: "8$" },
    { name: "Garden Salad", price: "6$" },
    { name: "Velora Classic Burger", price: "10$" },
    { name: "BBQ Chicken Burger", price: "9$" },
    { name: "Grilled Ribeye Steak", price: "18$" },
    { name: "Creamy Alfredo Pasta", price: "11$" },
    { name: "Spicy Arrabbiata Pasta", price: "10$" },
    { name: "Mushroom Truffle Pasta", price: "13$" },
    { name: "Chicken Shawarma Plate", price: "9$" },
    { name: "Grilled Salmon Fillet", price: "16$" },
    { name: "Chocolate Lava Cake", price: "7$" },
    { name: "Classic Cheesecake", price: "6$" },
  ];

  return (
    <div id="menu-container">
      <h1>OUR MENU</h1>

      <div id="menu">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div className="menu-item">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;