import Book from "../components/book";
import { connect } from 'react-redux';
import { borrowBook } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    borrowUnsuccessful: state.bookReducer.borrowUnsuccessful,
    borrowSuccessful: state.bookReducer.borrowSuccessful
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    borrowBook: (userId,isbn) => borrowBook(dispatch,userId,isbn)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
