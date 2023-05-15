import React from 'react';
import './style.css'

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  detectChange = (event) => {
    this.setState({ name: event.target.value });
  }

  reset = () => {
    this.setState({name: ""})
  }

  render() {
    return (
      <div className='container-input'>
        <input type='text' value={this.state.name} onChange={this.detectChange} />
        <p>{this.state.name}</p>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Input;
