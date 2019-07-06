import React, { Component } from 'react';

class TableHeader extends Component {
  
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    console.log("tableHeader: in raiseSort, path = ", path)
    this.props.onSort(sortColumn);
  }  

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>

    return <i className="fa fa-sort-desc"></i>

  }

  render() { 
    const { columns } = this.props;
    
    return (  
    //   <thead>
    //     {columns.map(c => {
          
    //     return <th onClick={this.raiseSort(c.path)} >{console.log(c)}{c.lable}</th>
    //     })}
    // </thead>

      <thead>
        <tr>
          {/* <th onClick={() => this.raiseSort(columns[0].path)} scope="col">{columns[0].lable}</th>
          <th onClick={() => this.raiseSort("genre.name")} scope="col">Genre</th>
          <th onClick={() => this.raiseSort("numberInStock")} scope="col">Stock</th>
          <th onClick={() => this.raiseSort("dailyRentalRate")} scope="col">Rate</th>
          <th scope="col">Like</th>
          <th></th> */}

          {columns.map(column => (                    
            <th 
              className="clickable"
              key={column.path || column.key} 
              onClick={() => this.raiseSort(column.path)}
            >
              {column.lable}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;