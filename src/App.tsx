import React from 'react';
import circle from './assets/circle.png';
import BlochState from './components/BlochState';

const App = () => ((
    <div className="App">
        <header className="App-header">
            <img src={circle} alt="logo" style={{ position: 'absolute' }} />
            <BlochState />
        </header>
    </div>
));

export default App;
