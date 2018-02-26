import React, {Component} from 'react';
import Counter from './Counter.js';

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [{
        counter:0
      }],
    }
  }
  // const CreateUniqueId(function(){
  //   let obj = {};
  //   return function(keyword) {
  //     obj[keyword] = (keyword in obj)? (++obj[keyword]):0;
  //     return keyword + '_' + obj[keyword];
  //   };
  // })
  IncrementItem = ()=> {
    let i = 0;
    this.setState({counters:<Counter/> + [i]});
    i++;
  }
  DecreaseItem = () => {
    this.setState({counters:this.state.clicks - 1});
  }

  render() {
    return(
      <div>
        <button onClick={this.IncrementItem}>Add Counter</button>
        {this.state.show ? <h2>{this.state.clicks}</h2>: ''}
        <button onClick={this.DecreaseItem}>Minus Counter</button>
        <li>{this.state.counters}</li>
        </div>
  )}
} //component ending brace
