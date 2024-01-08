import './App.css';
import Color from './components/color';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm.js';

function App() {
    const addColor = (newColor) => {
        setColors([...colors, newColor]);
    };
    let [colors, setColors] = useState(['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet']);
    let colorMap = colors.map((color, i) => {
        return <ColorBlock key={i} color={color} />;
    });
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    );
}

export default App;
