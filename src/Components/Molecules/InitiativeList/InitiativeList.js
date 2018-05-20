import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash.map'

import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'
import Participant from '../Participant/Participant'
import AddParticipant from '../AddParticipant/AddParticipant'

export default class InitiativeList extends PureComponent {

  static propTypes = {
    currentEncounter: PropTypes.array.isRequired,
    restartEncounterHandler: PropTypes.func.isRequired,
    addParticipantHandler: PropTypes.func.isRequired,
    updateParticipants: PropTypes.func.isRequired,
    removeParticipantHandler: PropTypes.func.isRequired,
    clearEncounter: PropTypes.func.isRequired,
    initiativeMode: PropTypes.oneOf(['prepare', 'inCombat']),
    currentRound: PropTypes.number
  }

  setInitiativeForCharacter = (initative, participant) => {
    let encounterParticipants = map(this.props.currentEncounter, (encounterParticipant) => {
      console.log(participant, this.props.currentEncounter, encounterParticipant)
      if (participant.name === encounterParticipant.name) {
        encounterParticipant.initiative = initative
      }
      return encounterParticipant
    })
    this.props.updateParticipants(encounterParticipants)
  }

  render () {
    return (
      <div className="initiative-list">
        {this.props.currentEncounter.length ?
          <React.Fragment>
            <ul>
              {this.props.currentEncounter.map((participant) => {
                return (
                  <Participant removeParticipantHandler={this.props.removeParticipantHandler} key={participant.name}
                               characterName={participant.name}
                               playerName={participant.player || 'NPC'}
                               initiative={participant.initiative || 0}
                               changeInitiativeHandler={(event) => {this.setInitiativeForCharacter(event.target.value, participant)}}/>
                )
              })}
            </ul>
            <AddParticipant addParticipantHandler={this.props.addParticipantHandler}/>
          </React.Fragment> : ''}
        {this.props.currentEncounter.length === 0 ?
          'Please add a group from the groups list'
          : <React.Fragment>
            <FontAwesomeButton icon='sync-alt' onClick={this.props.restartEncounterHandler}/>
            <FontAwesomeButton icon='trash-alt' onClick={this.props.clearEncounter}/>
          </React.Fragment>}
      </div>
    )
  }

}