import React, { Component, useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import 'tachyons';
import Particles from './components/Particles/Particles';

function App(props) {
    const { input, setInput } = useState();

    const onInputChange = (event) => {
        console.log(event.target.value);
    }

    const onButtonSubmit = () => {
        console.log('click');
    }

  return (
    <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
            onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}
        />
           {/* <FaceRecognition />*/}
    </div>
  );
}

export default App;
