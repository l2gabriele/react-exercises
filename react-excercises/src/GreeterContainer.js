import React, {Component} from 'react';
import Greeter from './Greeter.js';

export default class GreeterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  render() {
  return (
    <div>
    <Greeter onNameChange={this.onNameChange} thing={this.state.name} />
    </div>);
  }
}
