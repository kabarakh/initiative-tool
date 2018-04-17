import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeButton from "../../Atoms/FontAwesomeButton/FontAwesomeButton";

export default class InitiativeList extends PureComponent {

  static propTypes = {
    currentEncounter: PropTypes.array.isRequired
  };

  startEncounter = () => {

  };

  render() {
    return (
        <div className="initiative-list">
          {this.props.currentEncounter.map((participant) => {
            return "participant";
          })}
          <FontAwesomeButton icon={'play'} onClick={this.startEncounter} buttonClassName="button-transparent" size="2x"/>
        </div>
    );
  }

}