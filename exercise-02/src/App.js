import React, { Component } from 'react';
import Counters from './components/counters'
import NavBar from './components/navbar'
import './App.css';

class App extends Component {
  state = { 
    counters: [
      {id: 1, value: 4 },
      {id: 2, value: 0 },
      {id: 3, value: 0 },
      {id: 4, value: 0 }
    ]
  }

  handleReset = (counter) => {
    const counters = this.state.counters.map(c => { c.value = 0; return c})   

    this.setState({ counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]  

    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]

    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value--;

    this.setState({ counters })
  }

  handleDelete = (id) => {
    const index = this.state.counters.findIndex((counter) => counter.id === id);
    if (index > -1) {      
      this.setState(this.state.counters.splice(index, 1));

    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>        
        <main className="container">
          <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
