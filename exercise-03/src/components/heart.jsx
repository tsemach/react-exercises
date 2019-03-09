import React, { Component } from 'react';

class Heart extends Component {
  state = {  

  }
  render() { 
    let heartClass = ("fa fa-heart" + (this.props.full ? '' : '-o'));

    return (
      <i onClick={this.props.onClick} className={heartClass} aria-hidden="true"/>
    );
  }
}
 
export default Heart;