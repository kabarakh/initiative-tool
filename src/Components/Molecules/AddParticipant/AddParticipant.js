import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import './AddParticipant.scss'

export default class AddParticipant extends PureComponent {
  static propTypes = {
    addParticipantHandler: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      monsterName: ''
    }
  }

  reset = (event) => {
    event.preventDefault()
    this.setState({
      monsterName: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({
      monsterName: event.target.value,
    })
  }

  addParticipant = (event) => {
    event.preventDefault()
    if (this.state.monsterName.length) {
      this.props.addParticipantHandler(this.state.monsterName)
      this.reset(event)
    }
  }

  render() {
    return (
      <div className="add-participant">
        <form onSubmit={this.addParticipant}>
          <input type="text" onChange={this.handleNameChange} value={this.state.monsterName}
            placeholder="Monster Name" />
          <FontAwesomeButton icon="plus" onClick={this.addParticipant} />
        </form>
      </div>
    )
  }
}