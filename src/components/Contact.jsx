import React from "react";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <main>
      Contact Us
        <h1></h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Enter Email" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell Us About Your Queries..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};
//2.0
export default Contact;
