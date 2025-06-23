import React,{useState} from "react";
import axios from "axios";  
import Logo from "../assets/logo.png";

import "./styles/CreateFruitPage.css";

function CreateFruitPage() {
    const [fruitData, setFruitData] = useState({
        name: "",
        vitamin: "",
        price: "",
        image: null
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFruitData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }; 
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFruitData((prevData) => ({
                ...prevData,
                image: file
            }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fruitData.name || !fruitData.vitamin || !fruitData.price || !fruitData.image) {
            alert("Please fill all fields");
            return;
        }
        /*const formData = new FormData();
        formData.append("name", fruitData.name);
        formData.append("vitamin", fruitData.vitamin);
        formData.append("price", fruitData.price);
        formData.append("image", fruitData.image);*/

        try {
            const response = await axios.post("http://localhost:8000/api/v1/fruits/create/", fruitData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 201) {
                alert("Fruit added successfully");
                setFruitData({
                    name: "",
                    vitamin: "",
                    price: "",
                    image: null
                });
                console.log(fruitData);
            } else {
                alert("Failed to add fruit");
            }
        } catch (error) {
            console.error("Error adding fruit:", error);
            alert("An error occurred while adding the fruit");
        }
    }
    //console.log(fruitData);
    return(
        <div className="createfruitpage-container">
            <img src={Logo} alt="Fruit App Logo" className="logo"/>
            <h3>SOME FRUITS</h3>

            <h2>Add Fruit</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-wrapper-1">
                    <div >
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="form-wrapper-1-inputfield"
                            name="name"
                            value={fruitData.name}
                            onChange={handleInputChange} 
                        />
                        <div className="form-wrapper-1-innerdiv">
                            <input 
                                type="file" 
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Add Vitamin</label>
                        <select 
                            name="vitamin" 
                            id="vitamin"
                            value={fruitData.vitamin}
                            onChange={handleInputChange}
                        >
                            <option value="">Please choose</option>
                            <option value="Vitamin A">Vitamin A</option>
                            <option value="Vitamin B6">Vitamin B6</option>
                            <option value="Vitamin E">Vitamin E</option>
                            <option value="Vitamin C">Vitamin C</option>
                            <option value="Vitamin K">Vitamin K</option>
                            <option value="folate">Folate</option>
                        </select>
                    </div>
                    <div >
                        <input 
                            className="form-wrapper-1-inputfield" 
                            type="text" 
                            placeholder="Enter price"
                            name="price"
                            value={fruitData.price}
                            onChange={handleInputChange}
                        />
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