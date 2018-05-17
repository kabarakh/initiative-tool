import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton';

import CharacterListEntry from '../CharacterListEntry/CharacterListEntry';
import Collapsible from '../Collapsible/Collapsible';

import './CharacterList.scss';

export default class CharacterList extends PureComponent {

    static propTypes = {
        characterList: PropTypes.object.isRequired,
        useCharactersForEncounter: PropTypes.func.isRequired,
    };

    render() {
        return (
            <ul className="character-list">
                {map(this.props.characterList, (group, groupName) => {
                    return (
                        <li key={groupName}>
                            <Collapsible header={
                                <React.Fragment>
                                    <FontAwesomeButton icon={'arrow-left'}
                                                       onClick={(event) => {
                                                           event.preventDefault();
                                                           this.props.useCharactersForEncounter(
                                                               groupName);
                                                       }}
                                                       buttonClassName="button-transparent"/> {groupName}
                                </React.Fragment>
                            }>
                                <ul>
                                    {group.map((characterEntry) => {
                                        return <CharacterListEntry character={characterEntry}
                                                                   key={characterEntry.name}/>;
                                    })}
                                </ul>
                            </Collapsible>
                        </li>
                    );
                })}
            </ul>
        );
    }
}