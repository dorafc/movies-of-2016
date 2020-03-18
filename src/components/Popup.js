import React, {Component} from 'react';

/** 
  * The popup component represents a reusable popup component
  * Relies on children prop to render content in the popup
*/

class Popup extends Component{
  render(){
    return(
      <div className='popup'>
        <h3>Popup</h3>
        <button onClick={(e)=>this.props.toggleAction(e, null)} >Close</button>
        {this.props.children}
      </div>
    )
  }
}

export default Popup