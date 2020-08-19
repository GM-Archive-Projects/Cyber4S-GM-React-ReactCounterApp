import React, { Component } from "react";
import "./App.css";
import Counter from "./comps/counter";
import UserInput from "./comps/userinput";

class App extends Component {
  state = { goalDate: "2020-11-07" };
  changeDate = (_val) => {
    this.setState({ goalDate: _val });
  };

  render() {
    return (
      <div className="App">
        <h1>Birthday Count Down App</h1>
        <Counter appGoalDate={this.state.goalDate} />

        <UserInput changeDateApp={this.changeDate} />
      </div>
    );
  }
}

export default App;
