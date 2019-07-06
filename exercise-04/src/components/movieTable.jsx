import React, { Component} from 'react';

import Like from './common/like'
import Table from './common/table';

class MovieTable extends Component {  
  columns = [
    { path: 'title', lable: 'Title' },
    { path: 'genre.name', lable: 'Genra' },
    { path: 'numberInStock', lable: 'Stock' },
    { path: 'dailyRentalRate', lable: 'Rate' },
    { 
      key: 'like', 
      content: movie => (
        <Like onClick={() => this.props.onLike(movie._id)} liked={movie.like}></Like> 
      )
    },    
    { 
      key: 'delete', 
      content: movie => (
        <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie._id)}>Delete</button> 
      )
    }
  ]

  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    console.log('movieTable: raiseSort is called')
    this.props.onSort(sortColumn);
  }

  render() { 
    const { movies, onSort, sortColumn} = this.props;

    return (
      <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    );    
  }
}
 
export default MovieTable;
