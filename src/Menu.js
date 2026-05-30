function Menu() {
  const menuSections = [
    {
      category: "Starters",
      items: [
        {
          name: "Crispy Calamari",
          description: "Golden fried calamari served with lemon garlic sauce.",
          price: "8$",
        },
        {
          name: "Garden Salad",
          description: "Fresh greens, tomatoes, cucumbers, and house dressing.",
          price: "6$",
        },
      ],
    },
    {
      category: "Burgers",
      items: [
        {
          name: "Velora Classic Burger",
          description: "Juicy beef patty, cheese, lettuce, tomato, and special sauce.",
          price: "10$",
        },
        {
          name: "BBQ Chicken Burger",
          description: "Grilled chicken breast with BBQ sauce and crispy onions.",
          price: "9$",
        },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Grilled Ribeye Steak",
          description: "Tender ribeye steak grilled to perfection with side fries.",
          price: "18$",
        },
        {
          name: "Chicken Shawarma Plate",
          description: "Marinated chicken served with fries, pickles, and garlic sauce.",
          price: "9$",
        },
        {
          name: "Grilled Salmon Fillet",
          description: "Fresh salmon fillet served with vegetables and lemon butter sauce.",
          price: "16$",
        },
      ],
    },
    {
      category: "Pasta",
      items: [
        {
          name: "Creamy Alfredo Pasta",
          description: "Rich Alfredo sauce with parmesan and perfectly cooked pasta.",
          price: "11$",
        },
        {
          name: "Spicy Arrabbiata Pasta",
          description: "Tomato-based pasta with garlic, chili, and herbs.",
          price: "10$",
        },
        {
          name: "Mushroom Truffle Pasta",
          description: "Creamy mushroom pasta finished with truffle flavor.",
          price: "13$",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with a melted chocolate center.",
          price: "7$",
        },
        {
          name: "Classic Cheesecake",
          description: "Smooth cheesecake served with a light berry topping.",
          price: "6$",
        },
      ],
    },
  ];

  return (
    <div id="menuPage">
      <div className="menuTop">
        <h1>OUR MENU</h1>
        <p>
          Discover a selection of carefully crafted dishes made with fresh
          ingredients, bold flavors, and Velora’s signature touch.
        </p>
      </div>

      <div className="menuSections">
        {menuSections.map((section) => (
          <div className="menuSection" key={section.category}>
            <h2>{section.category}</h2>

            {section.items.map((item) => (
              <div className="betterMenuItem" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;