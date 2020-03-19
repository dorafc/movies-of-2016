import React, {Component} from 'react';

// styles
import PopupToggleDiv from '../styles/popupToggle'
import { Button } from '../styles/Button'

/**
 * <PopupToggle> contains content that triggers a popup
 * Relies on children prop to render content
 * @props {function} toggleAction - function to close the popup
 * @props {*} children - content for the popup
 */

class PopupToggle extends Component{
  render(){
    return(
      <PopupToggleDiv className='popup-toggle'>
        {this.props.children}
        <Button onClick={(e)=>this.props.toggleAction(e, this.props.toggleTarget)}>
          {this.props.actionText}
        </Button>
      </PopupToggleDiv>
    )
  }
}

export default PopupToggle