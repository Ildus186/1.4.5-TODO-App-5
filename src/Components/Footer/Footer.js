import PropTypes from 'prop-types';
import React from 'react';
import './Footer.css';

import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ uncompleted, clearCompleted, filter, setFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{uncompleted} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  uncompleted: '23',
  clearCompleted: () => {}
};

Footer.propTypes = {
  uncompleted: PropTypes.string,
  clearCompleted: PropTypes.func
};

export default Footer;
