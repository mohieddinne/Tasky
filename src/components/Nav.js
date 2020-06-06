import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css"
import Modal from "./modal"


// import { BurgerIcon } from './'



class Nav extends Component {



  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
      task: ""
    };
  }
  state = {
    todos: [],

  };
  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: '' })
    };
    fetch('https://autofy-tasky.herokuapp.com/tasks?checked=false&candidate_email=gmohieddinne%40gmail.com/posts', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }
  toggleModal() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }




  render() {
    const { task } = this.state
    return (

      <div className="nav" >




        <Link to="/">
          <div className="logo">
            <p className="tasky">Tasky</p>
          </div>

        </Link>

        <nav className="nav">

          <ul>
            <NavLink activeClassName="active" to="/">
              <li className="rec">HOME</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Tasky">
              <li className="task">MY Task</li>
            </NavLink>
            <NavLink activeClassName="active" to="/DONE">
              <li className="done">Done</li>
            </NavLink>
          </ul>
          <button onClick={this.toggleModal} className="bnmodal">Open modal dialog</button>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} className="modal">
            <div className="modal-question">what do you want to do ?</div>
            <form onSubmit={this.submitHandler}>

              <input type="text" id="todo" name="text" placeholder="do something"
                className="do" onChange={this.changeHandler}></input>
              <button className="butdo" >I will do it </button></form>
          </Modal>
        </nav>

      </div>

    );
  }


}

export default Nav;
