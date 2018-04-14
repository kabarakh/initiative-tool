import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft';
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';

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

fontawesome.library.add(faAngleDoubleLeft, faAngleDoubleRight);

ReactDOM.render(<InitiativeToolApp
    characterList={characterList}/>, document.getElementById('initiative-tool'));
