import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

// The div function to change the
// background color by user's action
function ColoredDiv(userColor) {
  return (
    <div
      css={css`
        text-align: center;
        height: 100px;
        font-size: 40px;
        padding: 200px 0;
        //The background-color is replaced by the
        //color selected by user
        background-color: ${userColor.color};
      `}
    >
      Generated Color: {userColor.color}
    </div>
  );
}
// function to randomly generate the color, hue, luminosity
function RandColor() {
  const [color, setColor] = useState('#009905');
  const [hue, setHue] = useState('green');
  const [luminosity, setLuminosity] = useState('dark');
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
          <h2>luminosity:</h2>
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
        {/* Defining the props of ColoredDiv */}
        <ColoredDiv color={color} />
      </div>
    </div>
  );
}
// Header will only display things.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandColor />
      </header>
    </div>
  );
}

export default App;
