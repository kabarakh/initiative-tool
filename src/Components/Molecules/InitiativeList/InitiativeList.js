import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import Participant from '../Participant/Participant'

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
                  <Participant characterName={participant.name} playerName={participant.player || 'NPC'}
                               initiative={participant.initiative || 0}/>
                )
              })}
            </ul>
            <FontAwesomeButton icon={'plus'} size="2x" buttonClassName="button-transparent" onClick={this.props.addParticipantHandler}/>
          </React.Fragment> : ''}
        <FontAwesomeButton icon={'play'} onClick={this.props.startEncounterHandler} buttonClassName="button-transparent"
                           size="2x"/>
      </div>
    )
  }

}