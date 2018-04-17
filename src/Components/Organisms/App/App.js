import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import InitiativeList from '../../Molecules/InitiativeList/InitiativeList';
import FlyIn from '../../Molecules/FlyIn/FlyIn';
import CharacterList from '../../Molecules/CharacerList/CharacterList';

export default class InitiativeToolApp extends PureComponent {

  static propTypes = {
    characterList: PropTypes.array.isRequired,
  };

  constructor(props) {
      super(props);

      this.state = {
          ...props,
          currentEncounter: []
      };
  }

  render() {
    return (
        <div className={'initiative-tool-app'}>
          <InitiativeList currentEncounter={this.state.currentEncounter}/>
          <FlyIn>
            <CharacterList characterList={this.state.characterList}/>
          </FlyIn>
        </div>
    );
  };
};