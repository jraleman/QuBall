import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
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

    return (
        <div>
            {blochState}
        </div>
    );
};

const App = () => ((
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <BlochState />
        </header>
    </div>
));

export default App;
