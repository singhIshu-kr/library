import React from 'react';

class ReaderForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { readerId: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ readerId: event.target.value });
  }

  handleSubmit() {
    this.props.validateReader(this.state.readerId);
  }

  render() {
    const { isNotAReader} = this.props;
    return (
      <div>
        {isNotAReader && <p >Reader not found</p>}
        <label >
          <div >
            <input type="text" placeholder="user id" value={this.state.readerId} onChange={this.handleChange} required />
            <input id="submit" type="submit" value="Go to" onClick={this.handleSubmit} />
          </div>
        </label>
      </div>
    );
  }
}

export default ReaderForm;
