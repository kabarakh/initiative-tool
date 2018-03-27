import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class FontAwesomeButton extends PureComponent {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        size: PropTypes.oneOf()
    };

    render() {
        return 'FontAwesomeButton';
    }

}