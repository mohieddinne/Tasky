import React, { Fragment, Component } from "react";
import "./tasky.css"
import Todo from "./task-item";



class Tasky extends Component {

  state = {
    todos: [],
  };
  async componentDidMount() {
    const res = await fetch("https://autofy-tasky.herokuapp.com/tasks?checked=false&candidate_email=gmohieddinne%40gmail.com");
    const data = await res.json();
    this.setState({
      todos: data
    });
  }


  updateTodo(id, name, isDone) {
    let todos = this.state.todos;
    todos[id - 1].isDone = !isDone;
    this.setState({
      todos: todos
    });

  }

  render() {
    const { error, isLoaded, items } = this.state;

    return (
      <div>
        < Fragment >
          <h1 className="fee">Feeling Tasky</h1>

          <h2 className="it">It's time to clear some of this tasks !! don't you think </h2>
          {this.state.todos.map(todo => (
            <Todo
              name={todo.task}
              isDone={todo.isDone}
              id={todo.id}
              updateTodo={(id, name, isDone) =>
                this.updateTodo(id, name, isDone)
              }
            />
          ))}
        </Fragment >





      </div >
    );
  }
}


export default Tasky;
