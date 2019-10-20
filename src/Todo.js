import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            input: 'test',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({input: event.target.value})
        console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("You have submitted " + this.state.input)
    }

  
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Task" type="text" onChange={this.handleChange} value={this.state.input} />
                        <button type="submit">Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;