import React from 'react';
import ReaderForm from './readerForm';

class Reader extends React.Component {

  componentDidMount(){
    const { fetchReaderInfo , readerId} = this.props;
    console.log(readerId,"reader");
    readerId && fetchReaderInfo(readerId);
  }

  hideReaderForm() {
    const borrowForm = document.getElementById("borrowForm");
    borrowForm.style.display = "none";
  }

  render() {
    const { isNotAReader,validateReader ,reader} = this.props;
    return (
      <div>
        <div id="readerForm">
          <ReaderForm isNotAReader={isNotAReader} validateReader={validateReader}/>
        </div>
        <a href="/home">Go to home</a>
        <p>{reader.firstName} {reader.lastName}</p>
        </div>
    )
  }
}


export default Reader;
