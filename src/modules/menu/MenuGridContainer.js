import React, { Component } from 'react';
import MenuGrid from './MenuGridView';
import * as API from '../../services/api';

export default class MenuGridContainer extends Component {
  state = { menu: [], error: null };

  async componentDidMount() {
    
    try {
      const menu = await API.getAllMenuItems();

      this.setState({ menu });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { menu, error } = this.state;

    return (
      <div>
        {error && <h1>Error</h1>}
        {menu.length > 0 && <MenuGrid items={menu} />}
      </div>
    );
  }
}