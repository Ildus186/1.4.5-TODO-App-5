import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import Footer from './Components/Footer/Footer';
import NewTaskForm from './Components/NewTaskForm/NewTaskForm';
import TaskList from './Components/TaskList/TaskList';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task')
    ],
    filter: 'all'
  };

  filterTodos = (array, filter) => {
    if (filter === 'active') {
      return array.filter((item) => !item.completed);
    }
    if (filter === 'completed') {
      return array.filter((item) => item.completed);
    }
    return array;
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => !el.completed);
      return { todoData: newArray };
    });
  };

  addItem = (description) => {
    const newItem = this.createTodoItem(description);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return { todoData: newArray };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  createTodoItem(description) {
    return {
      description,
      created: new Date(),
      completed: false,
      id: this.maxId++
    };
  }

  render() {
    const { todoData, filter } = this.state;
    const visibleTodos = this.filterTodos(todoData, filter);

    const completedCount = this.state.todoData.filter((el) => !el.completed).length;

    return (
      <section className="todoapp">
        <NewTaskForm onAdd={this.addItem} />
        <section className="main">
          <TaskList
            todos={visibleTodos}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
          />
          <Footer
            uncompleted={completedCount}
            clearCompleted={this.clearCompleted}
            setFilter={this.setFilter}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}

// const rootElement = document.getElementById('root');
const root = createRoot(document.getElementById('root'));
root.render(<App />);
