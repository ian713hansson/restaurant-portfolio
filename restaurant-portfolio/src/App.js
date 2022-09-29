import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
  return (
    <div className="App">
      <Header />
      
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <p className='about'>
        Having been in the hospitality industry for over 20 years, I have a true passion for the culture of a restaurant. 
        Guests and co-workers alike, are of equal importance and I have always placed respect for those around me right on par 
        with efficient workflow and professionalism. 
      </p>
      <h2 className='slider-header'>Here's some images from some of my previous homes</h2>
      <ImageSlider slides={SliderData}/>
    </main>
    </div>
  );
}

export default App;
