import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CharacterListEntry from '../CharacterListEntry/CharacterListEntry';

import './CharacterList.css';
import FontAwesomeButton from "../../Atoms/FontAwesomeButton/FontAwesomeButton";

export default class CharacterList extends PureComponent {

    static propTypes = {
        characterList: PropTypes.array.isRequired
    };

    addCharactersToEncounter = () => {

    };

    render() {
        return (
            <React.Fragment>
                <ul className="character-list">
                    {this.props.characterList.map((characterEntry)=> {
                        return <CharacterListEntry character={characterEntry} key={characterEntry.name}/>
                    })}
                </ul>
                <FontAwesomeButton buttonClassName="button-transparent" size="2x" icon="check-square" onClick={this.addCharactersToEncounter}/>
            </React.Fragment>
        );
    }

}