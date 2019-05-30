
import React, { Component } from 'react';
import './App.css';


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            todoitem: []

        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.remove = this.remove.bind(this);
    }
    onChangeHandler(event) {
        this.setState({
            item: event.target.value
        })
    }
    addData(e) {
        var todoitem = this.state.todoitem;
        var item = this.state.item;
        todoitem.push(item);
        this.setState({
            todoitem,
            item: ' '
        });
        console.log(todoitem)

    }

    remove = (e, index) => {
        const todoitem = this.state.todoitem;
        todoitem.splice(index, 1);
        this.setState({
            todoitem,
        })
    }


    render() {
        return (
            <div>
                <h1>TODO APP</h1>
                <div className="footer"></div>
                <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                <button className="add todo" onClick={this.addData}>add</button>
                <button className="add todo" onClick={this.remove}>Delete</button>
                {/* <p>{this.state.todoitem}</p>   */}
                <ul>
                    {this.state.todoitem === [] ? null : this.state.todoitem.map((todolist, index) => {
                        return <div key={index}>
                            <li>{todolist}</li>
                        </div>
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;
#my name is komal and i form maharathra

