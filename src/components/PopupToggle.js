import React, {Component} from 'react';

/** 
  * A wrapper component that contains content that triggers a popup
  * Relies on children prop to render content
*/

class PopupToggle extends Component{
  render(){
    return(
      <div className='popup-toggle'>
        {this.props.children}
        <button onClick={(e)=>this.props.toggleAction(e, this.props.toggleTarget)}>
          {this.props.actionText}
        </button>
        <hr />
      </div>
    )
  }
}

export default PopupToggle