import React, { useEffect, useState } from 'react';
import circle from './assets/circle.png';
import './App.css';

const INITIAL_STATUS = 'DOWN';

const BlochState = () => {
    const [blochState, setBlochState] = useState<string|null>(null);

    const initBlochState = () => {
        setBlochState(INITIAL_STATUS);
    };

    useEffect(() => {
        initBlochState();
    }, []);

    const icon = blochState === INITIAL_STATUS ? '⬇' : '⬆' ;
    return (
        <div className="App-logo">
            {icon}
        </div>
    );
};

const App = () => ((
    <div className="App">
        <header className="App-header">
            <img src={circle} alt="logo" style={{ position: 'absolute' }} />
            <BlochState />
        </header>
    </div>
));

export default App;
