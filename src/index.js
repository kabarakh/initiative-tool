import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InitiativeToolApp from './Components/Organisms/App/App';

const characterList = [
    {
        name: 'Talon',
        player: 'Herb'
    },
    {
        name: 'Rufus',
        player: 'Iris'
    },
    {
        name: 'Samadhi',
        player: 'Iris'
    },
    {
        name: 'Somia',
        player: 'Pfersch'
    },
    {
        name: 'Melas',
        player: 'Daniel'
    },
    {
        name: 'Oscar',
        player: 'Doris'
    },
];

ReactDOM.render(<InitiativeToolApp
    characterList={characterList}/>, document.getElementById('initiative-tool'));
