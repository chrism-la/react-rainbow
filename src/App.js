import './App.css';
import Color from './components/color';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';

function App() {
    let [colors, setColors] = useState(['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet']);
    let colorMap = colors.map((color, i) => {
        return <ColorBlock key={i} color={color} />;
    });
    return <div className="App">{colorMap}</div>;
}

export default App;
