import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CharacterList extends PureComponent {

    propTypes = {
        characterList: PropTypes.array.required
    };

    render() {
        return (
            <ul>
                {this.props.characterList.map((characterEntry)=> {
                    return <li>{characterEntry.name}</li>
                })}
            </ul>
        );
    }

}