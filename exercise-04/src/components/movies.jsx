import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'
import ListGroup from './common/listGroup';
import MovieTable from './movieTable';
import _ from 'lodash';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      // movies: getMovies(),
      // genres: getGenres(),
      currentPage: 1,
      pageSize: 4,
      sortColumn: { path: 'title', order: 'asc'}
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()]
    this.setState({movies: getMovies(), genres})
  }

  handleDelete(_id) {
    const index = this.state.movies.findIndex((item) => item._id === _id);
    if (index > -1) {
      this.setState(this.state.movies.splice(index, 1));
    }    
  }

  handleLike = (_id) => {            
    const movies = [...this.state.movies]
    const index = movies.findIndex((item) => item._id === _id);

    movies[index] = {...movies[index]};
    movies[index].like = ! movies[index].like;    
    
    this.setState({movies});
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page})
  }

  handleGenreSelect = (genre) => {    
    this.setState({selectedGenre: genre, currentPage: 1})
  }
 
  handleSort = sortColumn => {
    this.setState({sortColumn});
  }

  getPagdeData = () => {
      const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

    const filteredMovies = selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => selectedGenre._id === m.genre._id) 
      : allMovies;
    
    const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sortedMovies, currentPage, pageSize)

    return {totalCount: filteredMovies.length, data: movies};
  }

  renderTable() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

    if (count === 0) return (
      <React.Fragment>        
        <h3>Movies database is empty</h3>        
      </React.Fragment>
    )    
    
    const { totalCount, data: movies } = this.getPagdeData();

    return (
      <React.Fragment>        
        <h3>There are {totalCount} movies in the database</h3>
        <div className="row">
          <div className="col-3">
            <ListGroup 
              items={this.state.genres} 
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <MovieTable 
              movies={movies} 
              sortColumn={sortColumn}
              onLike={this.handleLike} 
              onDelete={this.handleDelete}              
              onSort={this.handleSort}
            />
            <Pagination 
              itemsCount={totalCount} 
              pageSize={pageSize} 
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() { 
    return (      
      this.renderTable()
    );
  }
}
  
export default Movies