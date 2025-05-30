import React, {useState} from "react";
import ReactPaginate from "react-paginate";

import Fruit from "../components/FruitCard.jsx";

import LogoImage from "../assets/logo.png";
import GrapesImage from "../assets/grapes.png";
import BananaImage from "../assets/banana.png";
import GuavaImage from "../assets/guava.png";
import KiwiImage from "../assets/kiwi.png";
import MangoImage from "../assets/mango.png";
import OrangeImage from "../assets/orange.png";

import Fruits from "../Data.jsx";


import "./styles/HomePage.css";


function HomePage(){

  const [pageNumber, setPageNumber] = useState([]);

  const fruitsPerPage = 2;
  const pagesVisited = pageNumber * fruitsPerPage;


  const fruitItems = Array.isArray(Fruits) && Fruits.length > 0 ? Fruits 
    .slice(pagesVisited, pagesVisited + fruitsPerPage)
    .map((fruit) => {
      return (
        <Fruit 
          key={fruit.id} 
          name={fruit.name} 
          image={fruit.image} 
          price={fruit.price}
          vitamin={fruit.vitamin}
        />
      )
  }):<div></div>


  const changePage = ({selected}) => {setPageNumber(selected)};


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
          {fruitItems}
        </div>

        <div className = "pagination-container">
          <ReactPaginate
            previousLabel = {null}
            nextLabel = {null}
            pageCount = {Math.ceil(Fruits.length / fruitsPerPage)}
            onPageChange = {changePage}
            containerClassName ={"paginationBttns"}
            previousLinkClassName = {"previousBttn"}
            nextLinkClassName = {"nextBttn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}
            renderOnZeroPageCount={null}
          />
        </div>

        <footer>
          Razak-org&copy; 2024
        </footer>
    </div>
  )
}


export default HomePage;