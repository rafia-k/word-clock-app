import React from 'react';
import Word from './Word';
import './App.css';

const numToWord = {1: 'ONE', 2: 'TWO', 3:'THREE', 4:'FOUR', 5:'FIVE', 6:'SIX', 7:'SEVEN', 8:'EIGHT', 9:'NINE', 10:'TEN', 11:'ELEVEN', 12:'TWELVE'};

function light(map, word) {
  map.set(word, true);
}

function makeMap(arr) {
  let map = new Map();
  arr.forEach(word => map.set(word, false));
  return map;
}

function lightWords(wordsStartMap, wordsEndMap, hour, mins, m) {
  // always lit
  light(wordsStartMap, "IT");
  light(wordsStartMap, "IS");
  light(wordsEndMap, "O'CLOCK");

  // minutes
  if (28 <= mins && mins < 33) {
    // SPECIAL CASE --> no half to
    light(wordsStartMap, "HALF");
    light(wordsStartMap, "PAST");
  } else if (3 <= m && m < 8) {
    light(wordsStartMap, "FIVE");
    light(wordsStartMap, "MINUTES");
  } else if (8 <= m && m < 13) {
    light(wordsStartMap, "TEN");
    light(wordsStartMap, "MINUTES");
  } else if (13 <= m && 18) {
    light(wordsStartMap, "QUARTER");
  } else if (18 <= m && m < 23) {
    light(wordsStartMap, "TWENTY");
    light(wordsStartMap, "MINUTES");
  } else if (23 <= m && m < 28) {
    light(wordsStartMap, "TWENTY");
    light(wordsStartMap, "FIVE");
    light(wordsStartMap, "MINUTES");
  }

  if (3 <= mins && mins < 30) {
    light(wordsStartMap, "PAST");
  } else if (30 < mins && mins <= 57) {
    light(wordsStartMap, "TO");
  }

  // hour
  if (0 <= mins && mins < 30) {
    light(wordsEndMap, numToWord[hour]);
  } else {
    if (hour === 12) {
      hour = 0;
    }
    light(wordsEndMap, numToWord[hour + 1]);
  }
}

function App() {  
  const wordsStart = ['IT', 'IS', 'TEN', 'TWENTY', 'FIVE', 'QUARTER', 'HALF', 'MINUTES', 'PAST', 'TO'];
  const wordsEnd = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'O\'CLOCK'];

  // initialize states of words
  let wordsStartMap = makeMap(wordsStart);
  let wordsEndMap = makeMap(wordsEnd);

  // get date
  var date = new Date();
  var hour = date.getHours();
  var mins = date.getMinutes();

  // change hour and minutes if needed

  if (hour > 12) {
    hour -= 12;
  }

  var m = mins;
  if (m > 30) {
    m = 60 - m;
  }

  // LIGHT WORDS
  lightWords(wordsStartMap, wordsEndMap, hour, mins, m);

  return (
    <div className="App">

      <div>
        <h3 className="title">WORD CLOCK</h3>
      </div>

      <div className="flex-container">
        {wordsStart.map(curWord => (
          <Word text={curWord} lit={wordsStartMap.get(curWord)}/>
        ))}
        {wordsEnd.map(curWord => (
          <Word text={curWord} lit={wordsEndMap.get(curWord)}/>
        ))}
      </div>

      <div>
      </div>
      
    </div>
  );
}

export default App;
