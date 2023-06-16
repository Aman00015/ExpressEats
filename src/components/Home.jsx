import React from "react";
import "../styles/Home.scss";
import bg from "../assets/bg.jpeg";
import bg2 from "../assets/bg2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>
            Express <p>Eats</p>
          </h1>
          <br />
          <h3>Your Own SabziWala</h3> <br />
          <p>
            ExpressEats is your ultimate destination for all your fresh produce
            needs. We understand the importance of quality, convenience, and
            affordability when it comes to your daily groceries, especially
            fresh fruits and vegetables. That's why we've created ExpressEats –
            a platform designed to bring the experience of having your very own
            SabziWala (vegetable vendor) right at your fingertips.
          </p>{" "}
          <br />
          <button>Buy Vegies</button>
        </main>
      </div>
      <div className="home2">
        <img src={bg2} alt="bg" />
        <div>
          <p>
            At ExpressEats, we take pride in curating a wide selection of the
            freshest and finest produce directly from trusted local farmers and
            suppliers. Whether you're looking for crisp vegetables or juicy
            fruits, we've got you covered. Our mission is to deliver top-quality
            products that are not only delicious but also nourishing for you and
            your loved ones. With ExpressEats, you can say goodbye to long
            queues and crowded markets. Simply browse our user-friendly website
            or mobile app, and you'll find an extensive range of seasonal and
            exotic fruits and vegetables to choose from. We source our produce
            with care, ensuring that it reaches your doorstep at its peak
            freshness, so you can enjoy the goodness of nature with every bite.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1><br />
          <p>
            We understand that everyone has unique preferences and requirements,
            which is why ExpressEats offers the flexibility to customize your
            order according to your needs. Whether you want to stock up on
            essentials, try new recipes with exciting ingredients, or cater to
            specific dietary preferences, our diverse range of produce has got
            you covered. <br />
            At ExpressEats, we value your trust and satisfaction. Our team of
            dedicated professionals is committed to providing you with a
            seamless shopping experience. From secure payments to timely
            deliveries, we prioritize your convenience and ensure that your
            orders arrive safely and promptly. <br />
            Experience the convenience and joy of having Your Own SabziWala with
            ExpressEats. Join us today and embark on a journey towards
            healthier, tastier, and more vibrant meals for you and your family.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div >
          <h1>Brands</h1>

          <article>
            <div style={{
          animationDelay:"0.2s"
        }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
            </div>
            <div style={{
          animationDelay:"0.5s"
        }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>
            <div style={{
          animationDelay:"0.8s"
        }}>
            <AiFillInstagram/>
            <p>Instagram</p>
            </div>
            <div style={{
          animationDelay:"1s"
        }}>
            <AiFillYoutube/>
            <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
