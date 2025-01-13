import React from "react";

import Fruit from "../components/FruitCard.jsx";

import LogoImage from "../assets/logo.png";
import GrapesImage from "../assets/grapes.png";
import BananaImage from "../assets/banana.png";
import GuavaImage from "../assets/guava.png";
import KiwiImage from "../assets/kiwi.png";
import MangoImage from "../assets/mango.png";
import OrangeImage from "../assets/orange.png";


import "./styles/HomePage.css";


function HomePage(){

  return(
    <div className="homepage-container">
        <img src={LogoImage} alt="" className="logo"/>
        <h3>SOME FRUITS</h3>

        <div className="form-container">
          <form action="">
            <input type="text" className="seach-input" placeholder="search a fruit" />
            <input type="submit" className="form-action-button" value="search" />
          </form>
          <button>add</button>
        </div>

        <div className="fruits-display-container">
          <Fruit name="GRAPES" image={GrapesImage} price="1.02"/>
          <Fruit name="BANANA" image={BananaImage} price="2.02"/>
          <Fruit name="GUAVA" image={GuavaImage} price="0.90"/>
          <Fruit name="KIWI" image={KiwiImage} price="2.70"/>
          <Fruit name="MANGO" image={MangoImage} price="0.70"/>
          <Fruit name="ORANGE" image={OrangeImage} price="3.60"/>
        </div>

        <footer>
          Razak-org&copy; 2024
        </footer>
    </div>
  )
}


export default HomePage;