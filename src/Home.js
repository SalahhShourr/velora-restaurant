import { Link } from "react-router-dom";

function Home(){
    const scrollToTop = () => {
        window.scrollTo(0,0);
    };

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
  return(
  <div>
      <div id="background">
        <img src="/dottedbackground.webp" alt="Dotted background" />
      </div>

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
          <Link to="">READ MORE</Link>
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
          <Link onClick={scrollToTop} to="/menu">VIEW MENU</Link>
        </div>

        <div className="img">
          <img src="/food2.webp" alt="Burger" />
        </div>
      </div>

      <div id="reservation">
        <h1>RESERVATIONS</h1>
        <Link onClick={scrollToTop} to="/reservation">BOOK HERE</Link>
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
    </div>
  );
}

export default Home;