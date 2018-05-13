import React from 'react'
import ReactDOM from 'react-dom'

import FontAwesomeLibrary from './Shared/JavaScript/FontAwesomeLibrary/FontAwesomeLibrary'

import './index.css'
import InitiativeToolApp from './Components/Organisms/App/App'

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
]

FontAwesomeLibrary.addIcons()

ReactDOM.render(<InitiativeToolApp/>, document.getElementById('initiative-tool'))

