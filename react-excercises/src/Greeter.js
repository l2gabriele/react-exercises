import React, {Component} from 'react';

export default class Greeter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let welcome;
    if (this.props.thing.length === 0) {
      welcome = "";
    } else {
      welcome = "Welcome to React "
    }
  return (
    <div>
      <input type='text' name='name' onChange={(e) => this.props.onNameChange(e)} value={this.props.thing}/>
      <div>
         {welcome} {this.props.thing}
      </div>
    </div>);
  }
}
