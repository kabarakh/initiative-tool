import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import Participant from '../Participant/Participant'
import AddParticipant from '../AddParticipant/AddParticipant'

export default class InitiativeList extends PureComponent {

  static propTypes = {
    currentEncounter: PropTypes.array.isRequired,
    startEncounterHandler: PropTypes.func.isRequired,
    addParticipantHandler: PropTypes.func.isRequired
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
          <FontAwesomeButton icon={'play'} onClick={this.props.startEncounterHandler}
                             buttonClassName="button-transparent" size="2x"/>
          : ''}
      </div>
    )
  }

}