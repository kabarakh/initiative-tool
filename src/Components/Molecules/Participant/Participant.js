import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Participant extends PureComponent {

  static propTypes = {
    characterName: PropTypes.string.isRequired,
    playerName: PropTypes.string,
    initiative: PropTypes.number
  }

  render () {
    return (
      <li>{this.props.characterName} ({this.props.playerName})</li>
    )
  }
}