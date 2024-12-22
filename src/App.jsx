import React from "react";
import LogoImage from "./assets/logo.png";
import "./App.css";


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
    </div>
  )
}


export default HomePage;