import logo from './logo.svg';
import './App.css';
import Color from './components/color';
import React, { useState } from 'react';

function App() {
    let colors = ['violet', 'blue', 'lightblue', 'green'];
    return (
        <div className="App">
            <Color />
        </div>
    );
}

export default App;
