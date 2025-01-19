import React from 'react'
import { Link , useLocation } from "react-router-dom";





const Footer = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';




  return (
    <>
      <footer className={
         isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"
        }>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
            minus voluptatibus corporis eligendi quasi iure nihil eum reiciendis
            quod.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+00 000 000 00</p>
          <p>Amou5255zada@gmail.com</p>
          <p>© All Rights Reserved By abcdefgh.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
