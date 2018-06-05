import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

export default class NoteList extends PureComponent {

  static propTypes = {
    notes: PropTypes.array.isRequired
  }

  updateNoteTitle = (event) => {

  }

  updateNoteText = (event) => {

  }

  addNote = (event) => {

  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.notes.map((note) => {
            return 'a note'
          })}
        </ul>
        <textarea rows="4" onChange={this.updateNoteTitle} />
        <input type="text" onChange={this.updateNoteText} />
        <FontAwesomeButton icon={'plus'} onClick={this.addNote} />
      </React.Fragment>
    )
  }
}