import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "test",
    };
  }

  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              type="text"
              onChange={this.props.handleInput}
              value={this.props.currentItem.text}
            />
            <button type="submit">Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
