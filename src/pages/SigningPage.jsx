import React from "react";
import axios from "axios";

import {useParams, Link, useNavigate} from "react-router-dom";

import LogoImage from "../assets/logo.png";

import "./styles/SigningPage.css"
import {useAuth} from "../AuthContext.jsx"; 


function SigningPage() {
    const {isloggedIn, setIsLoggedIn} = useAuth();  
    const params = useParams();
    const navigate = useNavigate();
    const isSignedIn = params.slug == "sign-in";
    const submitButtonValue = params.slug == "sign-in" ? "SIGN IN" : "SIGN UP";

    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!userData.email || !userData.password || (!isSignedIn && !userData.confirmPassword)) {
            alert("Please fill all fields");
            return;
        }
        if (!isSignedIn && userData.password !== userData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const endPoint = isSignedIn ? "login" : "register";
            const response = await axios.post(`http://localhost:8000/users/${endPoint}/`, {
                email: userData.email,
                password: userData.password
            });
            if (response.status === 200 || response.status === 201) {
                alert(`${isSignedIn ? "login" : "registration"} successful`);
                setIsLoggedIn(true);
                navigate("/");    
            } else {
                alert("Login failed");
            }
        }catch (error) {
            alert("An error occurred: " + error);
        }
    }
      
    return(
        <div className="signing-page-container">           
            <Link to = "/"><img src={LogoImage} alt="" className="logo"/></Link>
            <h3>SOME FRUITS</h3>

            <form action="" onSubmit = {handleLogin}>
                <input 
                    type="email" 
                    className="input-type-1" 
                    placeholder="Email" 
                    value = {userData.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <input 
                    type="password" 
                    className="input-type-1" 
                    placeholder="Password"
                    value = {userData.password}
                    onChange = {handleInputChange}
                    name = "password"
                />
                {
                    params.slug == "sign-up" && <input 
                        type="password" 
                        className="input-type-1" 
                        placeholder="Re-enter password"
                        value = {userData.confirmPassword}
                        onChange = {handleInputChange}
                        name = "confirmPassword"
                        /> 
                }
                <input type="submit" className="input-type-2" value={submitButtonValue}/>
                {
                    params.slug == "sign-in" ? 
                    <p>Don't have an account? <Link to ="/sign-up">sign up here</Link></p> :
                    <p>Already have an account? <Link to ="/sign-in">Sign in here</Link></p>
                }
                
            </form>
        </div>
    )
}

export default SigningPage;