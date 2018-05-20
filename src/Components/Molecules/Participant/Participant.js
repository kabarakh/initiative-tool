import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

export default class Participant extends PureComponent {

  static propTypes = {
    characterName: PropTypes.string.isRequired,
    playerName: PropTypes.string,
    initiative: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    removeParticipantHandler: PropTypes.func.isRequired,
    changeInitiativeHandler: PropTypes.func.isRequired
  }

  render () {
    return (
      <li>
        {this.props.characterName} ({this.props.playerName})
        <input type="text" onChange={this.props.changeInitiativeHandler}
               placeholder="Initiative" value={this.props.initiative}/>
        {
          this.props.playerName === 'NPC'
            ? <FontAwesomeButton icon='trash-alt' onClick={(event) => {
              event.preventDefault()
              this.props.removeParticipantHandler(this.props.characterName)
            }}/>
            : ''
        }
      </li>
    )
  }
}