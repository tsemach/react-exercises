import React, { Component } from 'react';

class ListGroup extends Component {
  state = {  }


  render() {    
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = this.props;

    return (  
      <ul className="list-group">
        {/* <li className="list-group-item list-group-item-action active">All Genres</li> */}
        { items.map(item => (
          <li 
            onClick={() => onItemSelect(item)} 
            key={item[valueProperty]} 
            className={item === selectedItem ? "list-group-item active" : "list-group-item"}
          >{item[textProperty]}</li>
        ))}
        
        
        {/* <li className="list-group-item" onClick={() => (this.onClik('action'))}>Action</li> */}

        
      </ul>
    );
  }
}
 
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}
export default ListGroup;
