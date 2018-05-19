import React, { PureComponent } from 'react'
import clone from 'lodash.clonedeep'
import filter from 'lodash.filter'
import map from 'lodash.map'

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

  useCharactersForEncounter = (groupName) => {
    let newState = clone(this.state)
    newState.currentEncounter = clone(newState.characterList[groupName])

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  restartEncounter = () => {
    let newState = clone(this.state)
    newState.currentEncounter = filter(newState.currentEncounter, (participant) => {return participant.playerName !== 'NPC'})
    map(newState.currentEncounter, (participant) => {
      delete participant.initiative
    })

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  addParticipant = (name) => {
    let newParticipant = {
      name: name,
      playerName: 'NPC',
      notes: []
    }

    let newState = clone(this.state)
    newState.currentEncounter.push(newParticipant)

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  clearEncounter = () => {
    let newState = clone(this.state)
    newState.currentEncounter = []

    this.setState(newState)
    db.saveCurrentEncounter(newState.currentEncounter)
  }

  render () {
    return (
      <div className={'initiative-tool-app'}>
        <InitiativeList currentEncounter={this.state.currentEncounter}
          restartEncounterHandler={this.restartEncounter}
          addParticipantHandler={this.addParticipant}
          clearEncounter={this.clearEncounter}/>
        <FlyIn>
          <CharacterList characterList={this.state.characterList}
            useCharactersForEncounter={this.useCharactersForEncounter}/>
        </FlyIn>
      </div>
    )
  };
};