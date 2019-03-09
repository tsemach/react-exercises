import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
  render() { 
    return (  
      <div>
        {this.props.counters.map(counter => 
          <Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete}></Counter>)}
      </div>
    );
  }
}
 
export default Counters;
