import { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";
import { Navbar } from "../../components/navbar/Navbar";
import aboutJpeg from '../../assets/about.jpg'

export const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("/api/about")
      .then((res) => {
        setAbout(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []); // Dependency array prevents infinite re-renders

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <section className="about-section">
          <h1>About Coffee Shop</h1>
          <p className="coffee-para">
            Coffee, a beverage brewed from the roasted and ground seeds of the
            tropical evergreen coffee plants of African origin, is one of the
            world's most popular drinks. Coffee is widely appreciated for its
            invigorating effect due to caffeine, an alkaloid present in coffee.
          </p>
          <p>
            Various studies suggest that caffeine may help protect against
            Parkinson’s disease. Some research indicates that men who drink
            over four cups of coffee daily may have a fivefold lower risk of
            developing Parkinson’s disease.
          </p>
          <div className="image-container">
            <img
              src={aboutJpeg}
              alt="Coffee cup on a table"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
        </section>

        <section className="reviews" aria-label="Customer Reviews">
          {about.length > 0 ? (
            about.map((el) => (
              <div key={el._id} className="review-card">
                <img src={el.image} alt={`${el.name}'s review`} loading="lazy" />
                <h4>{el.name}</h4>
                <p>{el.review}</p>
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews available.</p>
          )}
        </section>
      </div>
    </>
  );
};
