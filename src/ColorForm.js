import React, { useState } from 'react';

export default function ColorForm(props) {
    let [input, setInput] = useState('');

    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    );
}
