import Home from "../components/home";
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    books:state.homeReducer.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBooks: () => fetchBooks(dispatch)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
