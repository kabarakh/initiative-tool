import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import Participant from '../Participant/Participant'
import AddParticipant from '../AddParticipant/AddParticipant'

export default class InitiativeList extends PureComponent {

  static propTypes = {
    currentEncounter: PropTypes.array.isRequired,
    restartEncounterHandler: PropTypes.func.isRequired,
    addParticipantHandler: PropTypes.func.isRequired,
    clearEncounter: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="initiative-list">
        {this.props.currentEncounter.length ?
          <React.Fragment>
            <ul>
              {this.props.currentEncounter.map((participant) => {
                return (
                  <Participant key={participant.name} characterName={participant.name}
                    playerName={participant.player || 'NPC'}
                    initiative={participant.initiative || 0}/>
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