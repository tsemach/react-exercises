import React, { Component } from 'react';

class Liked extends Component {
  state = {  

  }
  render() { 
    let heartClass = ("fa fa-heart" + (this.props.liked ? '' : '-o'));

    return (
      <i 
        className={heartClass} aria-hidden="true"
        onClick={this.props.onClick} 
        style={{cursor: 'pointer'}}
      />
    );
  }
}
 
export default Liked;