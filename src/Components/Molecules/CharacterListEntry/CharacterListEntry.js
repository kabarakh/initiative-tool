import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import NoteList from '../NoteList/NoteList'

export default class CharacterListEntry extends PureComponent {

  static propTypes = {
    character: PropTypes.object.isRequired
  }

  render() {
    return (
      <li>
        {this.props.character.name} ({this.props.character.player})
        <NoteList notes={this.props.character.notes} />
      </li>
    )
  };
}