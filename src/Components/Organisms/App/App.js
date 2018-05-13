import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import clone from 'lodash.clonedeep'

import InitiativeList from '../../Molecules/InitiativeList/InitiativeList'
import FlyIn from '../../Molecules/FlyIn/FlyIn'
import CharacterList from '../../Molecules/CharacerList/CharacterList'
import db from './../../../Shared/JavaScript/IndexedDb/IndexedDb'

export default class InitiativeToolApp extends PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      characterList: {},
      currentEncounter: []
    }
  }

  async componentWillMount () {
    let newState = await this.loadState()
    this.setState(newState)
  }

  loadState = async () => {
    return {
      characterList: await db.loadAllCharacters(),
      currentEncounter: await db.loadCurrentEncounter()
    }
  }

  startEncounter = () => {
    let newState = clone(this.state)
    newState.currentEncounter = clone(newState.characterList.Bretten)

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  addParticipant = (name) => {
    let newParticipant = {
      name: name,
      playerName: 'NPC',
    }

    let newState = clone(this.state)
    newState.currentEncounter.push(newParticipant)

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  render () {
    return (
      <div className={'initiative-tool-app'}>
        <InitiativeList currentEncounter={this.state.currentEncounter} startEncounterHandler={this.startEncounter}
                        addParticipantHandler={this.addParticipant}/>
        <FlyIn>
          <CharacterList characterList={this.state.characterList}/>
        </FlyIn>
      </div>
    )
  };
};