import "./style.css";

function App() {
  const specials = [
    {
      image: "/food3.webp",
      alt: "Grilled Herb Chicken",
      title: "Grilled Herb Chicken",
      description: "Tender chicken with herbs, served with roasted veggies.",
    },
    {
      image: "/food4.webp",
      alt: "Beef Steak",
      title: "Flame-Grilled Beef Steak",
      description: "Flame-grilled steak with pepper sauce and fries.",
    },
    {
      image: "/food5.webp",
      alt: "Creamy Mushroom Pasta",
      title: "Creamy Mushroom Pasta",
      description: "Creamy pasta with mushrooms and parmesan.",
    },
  ];

  return (
    <div>
      <div id="background">
        <img src="/dottedbackground.webp" alt="Dotted background" />
      </div>

      <nav className="navbar">
        <h1>Velora</h1>

        <div className="navButtons">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reservation">Reservations</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <div className="middleImage">
        <img
          width="100%"
          height="100%"
          src="/foodbackground.jpg"
          alt="Restaurant food background"
        />
      </div>

      <div className="restaurantDescription">
        <div className="img">
          <img src="/food1.jpg" alt="Steak with mashed potatoes" />
        </div>

        <div className="info">
          <h1>OUR DINING</h1>
          <p>
            Velora is a modern dining experience where elegance meets flavor.
            We craft every dish with care, blending fresh ingredients and
            refined techniques to create meals that feel both timeless and
            unforgettable.
          </p>
          <a href="/">READ MORE</a>
        </div>
      </div>

      <div className="restaurantDescription">
        <div className="info">
          <h1>THE MENU</h1>
          <p>
            Our menu is carefully crafted to offer a perfect balance of flavor,
            freshness, and creativity. From savory starters to satisfying main
            courses and delightful desserts, each dish is prepared using
            high-quality ingredients to ensure an unforgettable dining
            experience.
          </p>
          <a href="/menu">VIEW MENU</a>
        </div>

        <div className="img">
          <img src="/food2.webp" alt="Burger" />
        </div>
      </div>

      <div id="reservation">
        <h1>RESERVATIONS</h1>
        <a href="/reservation">BOOK HERE</a>
      </div>

      <div id="card-container">
        <div id="card-title">
          <h1>Today's Specials</h1>
        </div>

        <div id="cards">
          {specials.map((special) => (
            <div className="card" key={special.title}>
              <img src={special.image} alt={special.alt} />
              <h1>{special.title}</h1>
              <p>{special.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footerInfo">
          <h1>Location</h1>
          <p>Tyre, Lebanon</p>
        </div>

        <div className="footerInfo">
          <h1>Hours</h1>
          <p>Fri, Sat 4:00 PM - 9:00 PM</p>
          <p>Sun, Mon, Tue, Wed, Thur 4:00 PM - 8:00 PM</p>
        </div>

        <div className="footerInfo">
          <h1>Contact Us</h1>
          <p>velora@restaurant.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;