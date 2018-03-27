import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import InitiativeList from '../../Molecules/InitiativeList/InitiativeList';
import FlyIn from '../../Molecules/FlyIn/FlyIn';
import CharacterList from '../../Molecules/CharacerList/CharacterList';

import './App.css';

export default class InitiativeToolApp extends PureComponent {

    static propTypes = {
        characterList: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className={'initiative-tool-app'}>
                <InitiativeList />
                <FlyIn>
                    <CharacterList characterList={this.props.characterList}/>
                </FlyIn>
            </div>
        );
    };
};