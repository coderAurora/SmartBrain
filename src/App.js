import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import 'tachyons';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
           {/* <FaceRecognition />*/}
    </div>
  );
}

export default App;
