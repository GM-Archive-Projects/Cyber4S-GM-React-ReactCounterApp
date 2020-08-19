import React, { Component } from "react";

class UserInput extends Component {
    changeDate2 = () => {
        this.props.changeDateApp(this.refs.id_input.value)
    }
  render() {
    return (
      <div>
        <input ref="id_input" type="date" defaultValue="1996-11-07" />
        <button onClick={this.changeDate2} className="btn btn-primary">
          Change The Date
        </button>
      </div>
    );
  }
}

export default UserInput;
