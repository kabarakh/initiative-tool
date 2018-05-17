import React from 'react'
import ReactDOM from 'react-dom'

import FontAwesomeLibrary from './Shared/JavaScript/FontAwesomeLibrary/FontAwesomeLibrary'

import './index.scss'
import InitiativeToolApp from './Components/Organisms/App/App'

import db from './Shared/JavaScript/IndexedDb/IndexedDb'
import map from 'lodash.map'

const characterList = {
  'Bretten': [
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
  ],
    'Heilbronn Allan': [
        {
            name: 'Aliki',
            player: 'Iris',
            notes: []
        },
        {
            name: 'Chutlock',
            player: 'Jeanette',
            notes: []
        },
        {
            name: 'Mal Sadume',
            player: 'Chris',
            notes: []
        },
        {
            name: 'Ly\'Onus',
            player: 'Antje',
            notes: []
        },
        {
            name: 'Draven',
            player: 'Herb',
            notes: []
        },
    ],
    'Heilbronn Chris': [
        {
            name: 'Taziri',
            player: 'Iris',
            notes: []
        },
        {
            name: 'Kenji',
            player: 'Herb',
            notes: []
        },
        {
            name: 'Paavo',
            player: 'Allan',
            notes: []
        },
        {
            name: 'Secret',
            player: 'Jeanette',
            notes: []
        },
        {
            name: 'Ellyennea',
            player: 'Antje',
            notes: []
        },
    ]
};

map(characterList, (characters, group) => {
    db.saveGroup(group, characters)
})


FontAwesomeLibrary.addIcons()

ReactDOM.render(<InitiativeToolApp/>, document.getElementById('initiative-tool'))

