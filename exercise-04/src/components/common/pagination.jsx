import React, { Component } from 'react';

/**
 * props: pages = [{href: string, lable: number}]
 */
class Pagination extends Component {
  state = {  }
  pages = [
    {href: '#', label: 1 },
    {href: '#', label: 2 },
    {href: '#', label: 3 },
    {href: '#', label: 4 }
  ];

  handlePage = () => {
    console.log("pagination: page is press")
  }

  render() { 
    return ( 
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">          
          {this.pages.map(page => 
            <li key={page.label} className="page-item"><a className="page-link" onClick={this.handlePage}>{page.label}</a></li>
          )}                    
        </ul>
      </nav>
     );
  }
}
 
export default Pagination;