import React from "react";
import Footer from "./Footer";

export const About = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>Cart-forward</h1>
        <p>Founder Name: Paras Naulia</p>
      </header>

      <main>
        <h2>About Cart-forward</h2>
        <div className="about-us-content">
          <img
            src="https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg"
            alt="About Us Image"
          />
          <p>
            Welcome to Cart-forward We are a passionate team dedicated to
            providing high-quality [products you sell] at affordable prices. We
            believe that everyone deserves to have access to beautiful and
            functional products that can enhance their lives.
          </p>
          <p>
            Our story began in 2024 when Paras saw a need for free dilivery .
            Since then, we've grown into a thriving online store with a loyal
            customer base. We are committed to providing excellent customer
            service and a positive shopping experience for everyone.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>
              Quality: We source only the best products from reputable vendors.
            </li>
            <li>
              Affordability: We believe that everyone should be able to afford
              beautiful things.
            </li>
            <li>
              Customer Service: We are committed to providing exceptional
              customer service.
            </li>
            <li>
              Community: We believe in building a strong community around our
              brand.
            </li>
          </ul>
          <h3>Meet the Team</h3>
          <p>
            We are a small team of passionate individuals who are dedicated to
            making Ekart-Forward the best online store it can be.
          </p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Ekart-Forward. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default About;
