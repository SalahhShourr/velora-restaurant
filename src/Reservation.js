function Reservation() {
  return (
    <div id="reservationPage">
      <div className="reservationTop">
        <h1>Book a Table</h1>
        <p>
          Reserve your table at Velora and enjoy a premium dining experience
          crafted with elegance, comfort, and unforgettable flavor.
        </p>
      </div>

      <div className="reservationContainer">
        <div className="reservationInfo">
          <h2>Dining Hours</h2>

          <div className="reservationCard">
            <h3>Weekend</h3>
            <p>Friday - Saturday</p>
            <p>4:00 PM - 9:00 PM</p>
          </div>

          <div className="reservationCard">
            <h3>Weekdays</h3>
            <p>Sunday - Thursday</p>
            <p>4:00 PM - 8:00 PM</p>
          </div>

          <div className="reservationCard">
            <h3>Location</h3>
            <p>Tyre, Lebanon</p>
          </div>
        </div>

        <form className="reservationForm">
          <h2>Reservation Details</h2>

          <input type="text" placeholder="Full Name" />

          <input type="tel" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />

          <div className="formRow">
            <input type="date" />
            <input type="time" />
          </div>

          <select>
            <option>Number of Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
            <option>6+ Guests</option>
          </select>

          <textarea placeholder="Special requests"></textarea>

          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;