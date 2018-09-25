import React from 'react';
import { Link} from 'react-router-dom';

class Home extends React.Component{
  componentDidMount(){
    const { fetchBooks} = this.props;
    fetchBooks();
  }

  render(){
    const { books } = this.props;
    return (
      <div>
        <Link to={{pathname:'/reader'}}>Reader</Link>
        {books.map((book)=>{
          return (
            <li>
            <Link to={{ pathname: '/book', state:{ book : book}}}>{book.title}</Link>
            </li>
          )
        })}
      </div>
    )
  }
}

export default Home;
