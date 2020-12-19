import React from 'react';
import './App.css';

function Word({text, lit}) {

    var wordStyle = "word-gray";
    if (lit) {
        wordStyle = "word-lit";
    }

    return (
        <div className={wordStyle}>
            {text}
        </div>
    );
}

export default Word;