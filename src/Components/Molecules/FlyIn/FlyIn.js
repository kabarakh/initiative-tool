import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FlyIn.css';

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
        const classNames = classnames('flyin', {'is-open': this.state.isOpen});
        const faIcon = this.state.isOpen ? 'angle-double-right' : 'angle-double-left';

        return (
            <div className={classNames}>
                <div className='flyin-button-area'>
                    <FontAwesomeButton buttonClassName="flyin-button" onClick={this.toggleState} icon={faIcon} size="2x"/>
                </div>
                <div className='flyin-collapse-area'>{this.props.children}</div>
            </div>
        )
    }

}