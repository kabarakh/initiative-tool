import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton';

export default class FlyIn extends PureComponent {

    static propTypes = {
        children: PropTypes.node.isRequired,
        isOpen: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen || false
        }
    }

    toggleState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <FontAwesomeButton onClick={this.toggleState}/>
        )
    }

}