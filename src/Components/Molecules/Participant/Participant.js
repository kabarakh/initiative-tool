import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

export default class Participant extends PureComponent {

  static propTypes = {
    characterName: PropTypes.string.isRequired,
    playerName: PropTypes.string,
    initiative: PropTypes.number,
    removeParticipantHandler: PropTypes.func.isRequired
  }

  render () {
    return (
      <li>{this.props.characterName} ({this.props.playerName}) {
        this.props.playerName === 'NPC'
          ? <FontAwesomeButton icon='trash-alt' onClick={(event) => {
            event.preventDefault()
            this.props.removeParticipantHandler(this.props.characterName)
          }}/>
          : ''
      }</li>
    )
  }
}