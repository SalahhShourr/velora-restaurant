function Contact() {
  return (
    <div id="contact">
      <div className="contactTop">
        <h1>CONTACT US</h1>
        <p>
          We’d love to hear from you. Reserve a table, send feedback, or ask us
          anything.
        </p>
      </div>

      <div className="contactContainer">
        <div className="contactInfo">
          <div className="contactCard">
            <h2>Phone</h2>
            <p>📞 +961 12 345 678</p>
          </div>

          <div className="contactCard">
            <h2>Email</h2>
            <p>✉️ velora@restaurant.com</p>
          </div>

          <div className="contactCard">
            <h2>Location</h2>
            <p>📍 Tyre, Lebanon</p>
          </div>

          <div className="contactCard">
            <h2>Opening Hours</h2>
            <p>Fri, Sat: 4:00 PM - 9:00 PM</p>
            <p>Sun - Thur: 4:00 PM - 8:00 PM</p>
          </div>
        </div>

        <form className="contactForm">
          <h2>Send us a message</h2>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;