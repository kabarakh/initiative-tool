import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeButton from '../../Atoms/FontAwesomeButton/FontAwesomeButton'

import './Collapsible.scss'

export default class Collapsible extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
  }

  constructor (props) {
    super(props)
    this.state = {
      isOpen: props.isOpen || false,
    }
  }

  toggleState = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render () {
    return (
      <div className="collapsible">
        <div className="collapsible-header">
          {this.props.header}
        </div>
        <FontAwesomeButton buttonClassName='collapsible-button button-transparent'
                           icon={this.state.isOpen ? 'chevron-down' : 'chevron-left'}
                           onClick={this.toggleState}/>
        <div className={this.state.isOpen ? 'is-open collapse-area' : 'collapse-area'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}