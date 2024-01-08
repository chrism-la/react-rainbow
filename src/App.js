import logo from './logo.svg';
import './App.css';
import Color from './components/color';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';

function App() {
    let colors = ['violet', 'blue', 'lightblue', 'green'];
    let colorMap = colors.map((color, i) => {
        return <ColorBlock color={color} />;
    });
    return <div className="App">{colorMap}</div>;
}

export default App;
