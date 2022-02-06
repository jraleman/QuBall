import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../App.css';

const INITIAL_STATUS = 'DOWN';

const StyledContainer = styled.div`
    height: 40vmin;
    pointer-events: none;
`;

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
        <StyledContainer>
            {icon}
        </StyledContainer>
    );
};

export default BlochState;
