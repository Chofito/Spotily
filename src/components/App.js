import React from 'react';
import Albums from './Albums';
import Player from './Player';
import '../../node_modules/bulma/css/bulma.min.css';
import '../styles/spotily.css';

const App = () => {
  return (
    <div>
      <div className="container">
        <Albums />
      </div>
      <Player />
    </div>
  );
};

export default App;
