import React from "react";
import PropTypes from "prop-types"


import { PropTypes as ValidPropTypes } from "react"
import "./modal.css"

class Modal extends React.Component {
    render() {
        if (!this.props.isOpen) {
            return null;
        }



        return (
            <div className="bckg" >
                <div className="rectangle">
                    <div className="rectangle4">
                        <span onClick={this.props.onClose}>
                            X
            </span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.function,
    isOpen: PropTypes.bool,
    children: PropTypes.node

};

export default Modal;
