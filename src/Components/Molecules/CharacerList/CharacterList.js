import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash.map'

import CharacterListEntry from '../CharacterListEntry/CharacterListEntry'

import './CharacterList.css'

export default class CharacterList extends PureComponent {

  static propTypes = {
    characterList: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className="character-list">
        {map(this.props.characterList, (group, groupName) => {
          return (
            <React.Fragment key={groupName}>
              <div>{groupName}</div>
              {group.map((characterEntry) => {
                return <CharacterListEntry character={characterEntry} key={characterEntry.name}/>
              })}
            </React.Fragment>

          )
        })}
      </ul>
    )
  }
}