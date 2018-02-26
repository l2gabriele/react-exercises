import React, {Component} from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
    }
  IncrementItem = ()=> {
   this.setState({clicks:this.state.clicks + 1});
  }
  DecreaseItem = () => {
    this.setState({clicks:this.state.clicks - 1});
  }
  render() {
    return(
      <div>
        <button onClick={this.IncrementItem}>Add One</button>
        {this.state.show ? <h2>{this.state.clicks}</h2>: ''}
        <button onClick={this.DecreaseItem}>Minus One</button>
        </div>
    )}
}
