import React from 'react'
import "./NavBar.css";
import revolving from "./revolving.gif"
import {  Link  } from "react-router-dom";
import { useEffect, useState, } from 'react';
const NavBar = (props) => {
    const [location, setLocation] = useState("")
    const [contry, setCountry] = useState("India");
    const [temp, setTemp] = useState("");
    const [condition, setCondition] = useState("");
    const updateWeather = async () => {        
        let url = `https://api.weatherapi.com/v1/current.json?key=7a10147a943a406e8dc152547222606&q=New-Delhi${props.cityName}`
        let data = await fetch(url);
        let parseData = await data.json();
        setLocation(parseData.location.name);
        setCondition(parseData.current.condition.text);
        setCountry(parseData.location.country);
        setTemp(parseData.current.temp_c);
    }
    useEffect (()=>{
        setLocation(props.cityName);
        updateWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#4863A0"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="/" style = {{color: "white", marginRight : "0px"}}>Gorilla News <img className = "roundCorner" src = {revolving}  widht = "7px" height = "30px"  alt= "h"></img></Link>
                    <button  className="navbar-toggler collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon my-toggler"  style={{color : "white"}}></span>
                        
                        <div className='close-icon py-1' style ={ {color : 'red'}}>✗</div>
                    </button>
                    <div style={{ }} className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-link">
                                <Link className ="nav-link" to="/" style={{color : "white"}}>Home</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/business" style={{color : "white"}}>Business</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/entertainment" style={{color : "white"}}>Entertainment</Link >
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link"  to="/health" style={{color : "white"}}>Health</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link"  to ='/science' style={{color : "white"}}>Science</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/sports" style={{color : "white"}}>Sports</Link>
                            </li>   
                            <li className="nav-link">
                                <Link className ="nav-link" to="/technology" style={{color : "white"}}>Technology</Link>
                            </li>  
                            <li className='nav-link'>
                            <Link className='nav-link'  to="/weather" style={{color : "white"}}>Weather</Link>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        )
    
}
export default NavBar;
