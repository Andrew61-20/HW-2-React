import React, { Component } from 'react';
import MenuItem from './MenuItemView';

export default class MenuItemContainer extends Component {
  state = {};
  render() {
    const { id } = this.props;
    return <MenuItem id={id} />;
  }
}