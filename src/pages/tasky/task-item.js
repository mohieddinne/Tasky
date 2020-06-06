import React from "react";

class Todo extends React.Component {
    render() {
        const { name, } = this.props;
        return (
            <div className="Todo">
                <input
                    type="checkbox"
                    checked={"checked"}

                />
                {name}
            </div>
        );
    }
}

export default Todo;
