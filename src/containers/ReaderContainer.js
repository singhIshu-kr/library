import Reader from "../components/reader";
import { connect } from 'react-redux';
import { validateReader, fetchReaderInfo} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    readerId:state.readerReducer.readerId,
    reader:state.readerReducer.reader,
    isNotAReader:state.readerReducer.isNotAReader,
    isValidReader:state.readerReducer.isValidReader
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    validateReader:(readerId)=>validateReader(dispatch,readerId),
    fetchReaderInfo:(readerId)=>fetchReaderInfo(dispatch,readerId)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Reader)
