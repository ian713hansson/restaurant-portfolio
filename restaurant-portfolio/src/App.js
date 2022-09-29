import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
