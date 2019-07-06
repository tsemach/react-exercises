import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
// import Pagination from './components/common/pagination';

class root extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <Movies />
        </main>
      </div>
    );
  }
}

export default root;
