import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './FontAwesomeButton.scss'

export default class FontAwesomeButton extends PureComponent {

  static propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string,
    mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    fixedWidth: PropTypes.bool,
    flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
    listItem: PropTypes.bool,
    pull: PropTypes.oneOf(['right', 'left']),
    pulse: PropTypes.bool,
    name: PropTypes.string,
    rotation: PropTypes.oneOf([90, 180, 270]),
    size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
    spin: PropTypes.bool,
    symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func.isRequired,
    buttonClassName: PropTypes.string
  }

  static defaultProps = {
    buttonClassName: 'button-transparent'
  }

  render () {
    return (
      <button onClick={this.props.onClick} type="button"
        className={this.props.buttonClassName}>
        <FontAwesomeIcon border={this.props.border} className={this.props.className} mask={this.props.mask}
          fixedWidth={this.props.fixedWidth} flip={this.props.flip} icon={this.props.icon}
          listItem={this.props.listItem} pull={this.props.pull} pulse={this.props.pulse}
          name={this.props.name} rotation={this.props.rotation} size={this.props.size}
          spin={this.props.spin} symbol={this.props.symbol} transform={this.props.transform}/>
      </button>
    )
  }

}