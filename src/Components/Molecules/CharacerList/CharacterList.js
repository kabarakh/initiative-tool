import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CharacterListEntry from '../CharacterListEntry/CharacterListEntry';

import './CharacterList.css';

export default class CharacterList extends PureComponent {

    static propTypes = {
        characterList: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className="character-list">
                {this.props.characterList.map((characterEntry) => {
                    return <CharacterListEntry character={characterEntry} key={characterEntry.name}/>
                })}
            </ul>
        );
    }
}