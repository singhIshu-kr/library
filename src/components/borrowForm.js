import React from 'react';
import { Redirect } from 'react-router-dom';

class BorrowForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { readerId: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ readerId: event.target.value });
  }

  handleSubmit() {
    console.log(this.props,"form")
    this.props.borrowBook(this.state.readerId, this.props.isbn);
  }

  render() {
    const { borrowUnsuccessful} = this.props;
    console.log("borrow unsucessful", borrowUnsuccessful)
    return (
      <div>
        {borrowUnsuccessful && <p >Reader not found</p>}
        <label >
          <div >
            <input type="text" id="teamName" placeholder="Name" value={this.state.readerId} onChange={this.handleChange} required />
            <input id="submit" type="submit" value="Go to" onClick={this.handleSubmit} />
          </div>
        </label>
      </div>
    );
  }
}

export default BorrowForm;
