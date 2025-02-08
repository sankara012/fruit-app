import React from "react";

import Logo from "../assets/logo.png";

import "./styles/CreateFruitPage.css";

function CreateFruitPage() {
    return(
        <div className="createfruitpage-container">
            <img src={Logo} alt="Fruit App Logo" className="logo"/>
            <h3>SOME FRUITS</h3>

            <h2>Add Fruit</h2>
            <form action="">
                <div className="form-wrapper-1">
                    <div >
                        <input type="text" placeholder="Name" className="form-wrapper-1-inputfield" />
                        <div className="form-wrapper-1-innerdiv">
                            <input type="file" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Add Vitamin</label>
                        <select name="" id="">
                            <option value="">Please choose</option>
                            <option value="A">Vitamin A</option>
                            <option value="B6">Vitamin B6</option>
                            <option value="E">Vitamin E</option>
                            <option value="C">Vitamin C</option>
                            <option value="K">Vitamin K</option>
                            <option value="folate">Folate</option>
                        </select>
                    </div>
                    <div >
                        <input className="form-wrapper-1-inputfield" type="text" placeholder="Enter price"/>
                    </div>
                </div>
                <div className="form-wrapper-2">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default CreateFruitPage;