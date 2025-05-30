import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

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
import { use } from "react";


function HomePage(){

  const [fruits, setFruits] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);

  const fruitsPerPage = 2;
  const pagesVisited = pageNumber * fruitsPerPage;


  const fruitItems = Array.isArray(fruits) && fruits.length > 0 ? fruits 
    .slice(pagesVisited, pagesVisited + fruitsPerPage)
    .map((fruit) => {
      return (
        <Fruit 
          key={fruit.id} 
          name={fruit.name} 
          image={fruit.image} 
          price={fruit.price}
          vitamin={fruit.vitamin_details}
        />
      )
  }):<div></div>


  const changePage = ({selected}) => {setPageNumber(selected)};

  // axios get fruit data request => http://127.0.0.1:8000/api/v1/fruits/
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/fruits/")
    .then((response) => {setFruits(response.data)})
    .catch((error) => console.log("Error fecthing data: ", error));
  
  ;}, []);


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