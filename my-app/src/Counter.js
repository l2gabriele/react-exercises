import React, { Component } from 'react';

export default class CounterListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickSub = this.onClickSub.bind(this);
  }
  onClickRemove() {
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickAdd() {
    let index = parseInt(this.props.index);
    this.props.addClick(index);
  }
  onClickSub() {
    let index = parseInt(this.props.index);
    this.props.subClick(index);
  }
  render () {
    return(
      <li className="list-group-item ">
        <div>
          <button onClick={this.onClickAdd}>Up</button>
          <button onClick={this.onClickSub}>Down</button>
          {this.props.item.value} {this.props.item.count}
          <button
            type="button"
            className="close"
          	onClick={this.onClickRemove}
          >
          &times;
          </button>
        </div>
      </li>
    );
  }
}
