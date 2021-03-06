import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
  constructor() {
    super();
    this.state = {movies: getMovies()};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(_id) {
    console.log("delete is press: " + _id);


    const index = this.state.movies.findIndex((item) => item._id === _id);
    console.log("index = " + index)
    if (index > -1) {
      //this.state.movies.splice(index, 1);      
      this.setState(this.state.movies.splice(index, 1));

    }    
    console.log(this.state.movies.length)
  }

  renderTable() {
    const { length: count } = this.state.movies;

    if (count === 0) return (
      <React.Fragment>        
        <h3>Movies database is empty</h3>        
      </React.Fragment>
    )    

    return (
      <React.Fragment>        
        <h3>There are {count} movies in the database</h3>
        <table className="table">
          <thead>
            <tr >
              <th scope="col">Lian</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          { this.state.movies.map(movie =>                       
            <tr key={movie._id}>              
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie._id)}  >Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </React.Fragment>
    )
  }

  render() { 
    console.log('movies: ', getMovies())
    return (      
      this.renderTable()
    );
  }
}
 
export default Movies