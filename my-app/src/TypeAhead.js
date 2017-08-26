import React, { Component } from 'react';
import CounterListItem from "./Counter";

var carBrands = [ "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Dodge", "Ferrari",
  "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Mazda", "Mercedez-Benz",
  "Mitsubishi", "Nissan", "Peugeot", "Porsche", "SAAB", "Subaru", "Suzuki", "Toyota",
  "Volkswagen", "Volvo"];

class TypeAheadList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.list.map((value)=>
          <li>{value}</li>
        )}
      </ul>
    );
  }

}


export default class TypeAhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let list = carBrands.filter((value)=> value.includes(event.target.value.toLowercase()));
    this.setState({list: list});
    this.setState({value: event.target.value});
    console.log(this.state.list);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <TypeAheadList  list={this.state.list}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
