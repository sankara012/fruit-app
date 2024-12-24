import React from "react";


function Fruit(props){

    return(
        <div className="fruit-card">
          <h4>{props.name}</h4>
          <img src={props.image} alt="" />
          <div className="card-labels-container">
            <ul>
              <li>vitamin A</li>
              <li>vitamin B6</li>
              <li>vitamin C</li>
              <li>vitamin K</li>
              <li>vitamin E</li>
              <li>polate</li>
            </ul>
            <div>
              <p className="card-price">{props.price} $</p>
            </div>
          </div>
          <div className="card-btns-container">
            <button>update</button>
            <button>delete</button>
          </div>
        </div>
    )
}

export default Fruit;