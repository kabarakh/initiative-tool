import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import './AddParticipant.scss'

export default class AddParticipant extends PureComponent {
  static propTypes = {
    addParticipantHandler: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
      monsterName: ''
    }
  }

  toggleState = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      monsterName: this.state.monsterName
    })
  }

  reset = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: this.props.isOpen,
      monsterName: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({
      monsterName: event.target.value,
      isOpen: this.state.isOpen
    })
  }

  addParticipant = (event) => {
    event.preventDefault()
    if (this.state.monsterName.length) {
      this.props.addParticipantHandler(this.state.monsterName)
      this.reset(event)
    }
  }

  render () {
    return (
      <div className="add-participant">
        <FontAwesomeButton buttonClassName={this.state.isOpen ? 'hidden' : 'button-transparent'} icon="plus"
          onClick={this.toggleState}/>
        <div className={this.state.isOpen ? 'toggle-area is-open' : 'toggle-area'}>
          <form onSubmit={this.addParticipant}>
            <input type="text" onChange={this.handleNameChange} value={this.state.monsterName}
              placeholder="Monster Name"/>
            <FontAwesomeButton buttonClassName="button-transparent" icon="save" onClick={this.addParticipant}/>
            <FontAwesomeButton buttonClassName="button-transparent" icon="times" onClick={this.reset}/>
          </form>
        </div>
      </div>
    )
  }
}