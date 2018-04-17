import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft';
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';

import './index.css';
import InitiativeToolApp from './Components/Organisms/App/App';

const characterList = [
    {
        name: 'Talon',
        player: 'Herb',
        notes: []
    },
    {
        name: 'Rufus',
        player: 'Iris',
        notes: []
    },
    {
        name: 'Samadhi',
        player: 'Iris',
        notes: []
    },
    {
        name: 'Somia',
        player: 'Pfersch',
        notes: []
    },
    {
        name: 'Melas',
        player: 'Daniel',
        notes: []
    },
    {
        name: 'Oscar',
        player: 'Doris',
        notes: []
    },
];

fontawesome.library.add(faAngleDoubleLeft, faAngleDoubleRight, faPlus, faCheckSquare);

ReactDOM.render(<InitiativeToolApp
    characterList={characterList}/>, document.getElementById('initiative-tool'));
