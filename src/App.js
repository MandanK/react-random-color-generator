import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

function ColoredDiv(userColor) {
  return (
    <div
      css={css`
        text-align: center;
        height: 100px;
        font-size: 40px;
        padding: 200px 0;
        background-color: ${userColor.color};
        transition: all 4s ease-out;
        -moz-transition: all 4s ease-out;
        -webkit-transition: all 4s ease-out;
      `}
    >
      Generated Color: {userColor.color}
    </div>
  );
}

function Control() {
  const [color, setColor] = useState('#009905');
  const [hue, setHue] = useState('red'); // useState('green')
  const [luminosity, setLuminosity] = useState('light'); // useState('dark')
  const parameter = {
    luminosity: luminosity,
    hue: hue,
  };
  return (
    <div>
      <h1>Random Color Generator</h1>
      <form>
        <label>
          <h2>Hue:</h2>
          <input value={hue} onChange={(e) => setHue(e.target.value)} />
        </label>
        <br />
        <label>
          <h2>Luminosity:</h2>
          <input
            value={luminosity}
            onChange={(e) => setLuminosity(e.target.value)}
          />
        </label>
      </form>
      <div>
        <button onClick={() => setColor(randomColor(parameter))}>
          Generate
        </button>
        <ColoredDiv color={color} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Control />
      </header>
    </div>
  );
}

export default App;
