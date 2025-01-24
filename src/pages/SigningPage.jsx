import React from "react";

import {useParams, Link} from "react-router-dom";

import LogoImage from "../assets/logo.png";

import "./styles/SigningPage.css"

function SigningPage() {

    const params=useParams();
    const submitButtonValue = params.slug == "sign-in" ? "SIGN IN" : "SIGN UP";
  
    

    return(
        <div className="signing-page-container">           
            <img src={LogoImage} alt="" className="logo"/>
            <h3>SOME FRUITS</h3>

            <form action="">
                <input type="email" className="input-type-1" placeholder="Email" />
                <input type="password" className="input-type-1" placeholder="Password"/>
                {
                    params.slug == "sign-up" && <input type="password" className="input-type-1" placeholder="Re-enter password"/> 
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