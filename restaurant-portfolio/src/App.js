import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
  const onButtonClick = () => {
    fetch('Resume July 2022.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob)
            let alink = document.createElement('a')
            alink.href = fileURL
            alink.download = 'Resume July 2022.pdf'
            alink.click()
        })
    })
}
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
      <div className='download-resume'>
                <h2>Click Below To Download My Resume</h2>
                <a href="Resume.pdf" download='Resume.pdf'>
                    <img className="download-btn" src='https://i.imgur.com/diKnGrS.png' onClick={onButtonClick} />
                </a>
            </div>
    </main>
    </div>
  );
}

export default App;
