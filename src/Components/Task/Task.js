import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Task.css';

export default class Task extends Component {
  static defaultProps = {
    description: 'text',
    created: new Date(),
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: true
  };

  static propTypes = {
    description: PropTypes.node,
    created: PropTypes.instanceOf(Date),
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    completed: PropTypes.bool
  };

  render() {
    const {
      other: { description, created, completed },
      onDeleted,
      onToggleCompleted
    } = this.props;

    const timeAgo = formatDistanceToNow(created, { includeSeconds: true, addSuffix: true });

    return (
      <li className={completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">created {timeAgo}</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}
