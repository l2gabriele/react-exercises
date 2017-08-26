import React, { Component } from 'react';
import CounterListItem from "./Counter";

var counterItems = [];
counterItems.push({index: 1, value: "Number 1", count: 0});
counterItems.push({index: 2, value: "Number 2", count: 0});
counterItems.push({index: 3, value: "Number 3", count: 0});

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAddItem = this.onClickAddItem.bind(this);
  }
  onClickAddItem() {
    this.props.addItem();
  }
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <CounterListItem
          key={index}
          item={item}
          index={index}
        	removeItem={this.props.removeItem}
          addClick={this.props.addClick}
          subClick={this.props.subClick}
        />
      );
    });
    return (
      <div>
        <ul className="list-group"> {items} </ul>
        <button onClick={this.onClickAddItem}>Add New Counter</button>
      </div>
    );
  }
}

export default class CounterListApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addClick = this.addClick.bind(this);
    this.subClick = this.subClick.bind(this);
    this.state = {counterItems: counterItems};
  }

  addItem() {
    counterItems.unshift({
      index: counterItems.length + 1,
      value: "Number " + counterItems.length + 1,
      count: 0
    });
    this.setState({counterItems: counterItems});
  }

  removeItem (itemIndex) {
    counterItems.splice(itemIndex, 1);
    this.setState({counterItems: counterItems});
  }

  addClick (itemIndex) {
    counterItems[itemIndex].count++
    this.setState({counterItems: counterItems});
  }

  subClick (itemIndex) {
    counterItems[itemIndex].count--
    this.setState({counterItems: counterItems});
  }

  render() {
    return (
      <div>
        <CounterList
          items={this.state.counterItems}
        	removeItem={this.removeItem}
          addItem={this.addItem}
          subClick={this.subClick}
          addClick={this.addClick}
        />
      </div>
    );
  }
}
