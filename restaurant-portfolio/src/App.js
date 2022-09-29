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
      <h2 className='slider-header'>Here's some images of some of my past homes</h2>
      <ImageSlider slides={SliderData}/>
    </main>
    </div>
  );
}

export default App;
