import React, {Component} from 'react';

// styles
import { PopupDiv, PopupWrap } from '../styles/popup'
import { CloseButton } from '../styles/button'

/**
 * The popup component represents a reusable popup component
 * Relies on children prop to render content in the popup
 * @props {function} toggleAction - function to close the popup
 * @props {*} children - content for the popup
 */

class Popup extends Component{
  render(){
    return(

        <PopupWrap>
          <PopupDiv className='popup'>
            <CloseButton onClick={(e)=>this.props.toggleAction(e, null)} >X Close</CloseButton>
            {this.props.children}
          </PopupDiv>
        </PopupWrap>
    )
  }
}

export default Popup