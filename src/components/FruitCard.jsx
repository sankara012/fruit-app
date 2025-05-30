import React from "react";


function Fruit(props){

    const vitamins = props.vitamin

    const vitaminList = vitamins.map((vitamin) => {
         return <li key={vitamin.id}>{vitamin.name}</li>
    })


    return(
        <div className="fruit-card">
          <h4>{props.name}</h4>
          <img src={props.image} alt="" />
          <div className="card-labels-container">
            <ul>
              {vitaminList}
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