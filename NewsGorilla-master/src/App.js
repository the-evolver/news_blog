
import './App.css';
import NavBar from './components/NavBar'
import React from 'react'
import  News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import Weather from './components/Weather.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const  App = () => {
  const [pageSize] = useState(5);
  const [progress, setProgress] = useState(0);
  const [apiKey] = useState("2e6fb912780e47a989d46d11404b69cc");
  const [cityName, setCity] = useState("New-Delhi");
    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress} 
        height = {3}
      />
        <NavBar cityName = {cityName}/>
        <Routes>
          <Route exact path="/weather" element = {<Weather setCity = {setCity} cityName ={cityName}/>}/>
          <Route exact path="/" element = {<News setProgress = {setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="in" category={'general'}/>}/>
          <Route exact path="/business" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="in" category={'business'}/>}/>
          <Route exact path="/entertainment" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="in" category={'entertainment'}/>}/>
          <Route exact path="/health" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="in" category={'health'}/>}/>
          <Route exact path="/sports"element = {<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="in" category={'sports'}/>}/>
          <Route exact path="/science"element = {<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="in" category={'science'}/>}/>
          <Route exact path="/technology"element = {<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="in" category={'technology'}/>}/>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
