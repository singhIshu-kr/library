import React from 'react';
import BorrowForm from './borrowForm';

class Book extends React.Component {

  showBorrowForm(){
    const borrowForm = document.getElementById("borrowForm");
    borrowForm.style.display = "block";
  }

  render() {
    const { book } = this.props.location.state;
    const { borrowBook, borrowUnsuccessful, borrowSuccessful} = this.props;
    let successful;
    if(borrowSuccessful){
      document.getElementById("borrowButton").style.display = "none";
      document.getElementById("borrowForm").style.display = "none";
      successful = <h3>SuccessFully borrowed book</h3>
    }
    return (
      <div>
        <div id="borrowForm">
          <BorrowForm borrowBook={borrowBook} borrowUnsuccessful={borrowUnsuccessful} isbn={book.isbn}/>
        </div>
        <a href="/home">Go to home</a>
        {successful}
        <h1>{book.title}</h1>
        <h3>isbn => {book.isbn}</h3>
        <h3>Author => {book.author}</h3>
        <button onClick={this.showBorrowForm} id="borrowButton">Borrow Book</button>
      </div>
    )
  }
}


export default Book;
