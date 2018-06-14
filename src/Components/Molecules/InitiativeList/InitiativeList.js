import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';

import EncounterList from './ListTypes/EncounterList/EncounterList';
import NoParticipants from './ListTypes/NoParticipants/NoParticipants';
import PrepareInitiativeList from './ListTypes/PrepareInitiativeList/PrepareInitiativeList';

export default class InitiativeList extends PureComponent {

  static propTypes = {
    currentEncounter: PropTypes.array.isRequired,
    restartEncounterHandler: PropTypes.func.isRequired,
    addParticipantHandler: PropTypes.func.isRequired,
    updateParticipants: PropTypes.func.isRequired,
    removeParticipantHandler: PropTypes.func.isRequired,
    clearEncounter: PropTypes.func.isRequired,
    initiativeMode: PropTypes.oneOf(['prepare', 'inCombat']),
    currentRound: PropTypes.number,
  };

  setInitiativeForCharacter = (initative, participant) => {
    let encounterParticipants = map(this.props.currentEncounter, (encounterParticipant) => {
      console.log(participant, this.props.currentEncounter, encounterParticipant);
      if (participant.name === encounterParticipant.name) {
        encounterParticipant.initiative = initative;
      }
      return encounterParticipant;
    });
    this.props.updateParticipants(encounterParticipants);
  };

  render() {
    return (
        <div className="initiative-list">
          {this.props.currentEncounter.length ? (this.props.initiativeMode === 'prepare' ? (
              <PrepareInitiativeList currentEncounter={this.props.currentEncounter}/>
          ) : (
              <EncounterList/>
          )) : (
              <NoParticipants/>
          )
          }
        </div>
    );
  }

}