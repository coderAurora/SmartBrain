import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import 'tachyons';
import Particles from './components/Particles/Particles';

function App(props) {
  return (
    <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
           {/* <FaceRecognition />*/}
    </div>
  );
}

export default App;
