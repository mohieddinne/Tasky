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
      isModalOpen: false
    };
  }

  toggleModal() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }





  render() {


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
            <NavLink activeClassName="active" to="/about">
              <li className="task">MY Task</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li className="done">Done</li>
            </NavLink>
          </ul>
          <button onClick={this.toggleModal} className="bnmodal">Open modal dialog</button>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} className="modal">
            <div className="modal-question">what do you want to do ?</div>
            <input type="text" id="todo" name="task" placeholder="do something" className="do"></input>
            <button className="butdo">I will do it </button>
          </Modal>
        </nav>

      </div>

    );
  }


}

export default Nav;
