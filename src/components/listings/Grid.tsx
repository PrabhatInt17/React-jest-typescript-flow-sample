import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

export default class Grid extends Component<any> {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };
  renderList() {
    return this.props.items.map((item) => <Single key={item.id} item={item} />);
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}
