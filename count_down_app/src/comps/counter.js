import React, { Component } from "react";

class Counter extends Component {
  state = { goalDate: "2055-05-05", days:999 };

  componentDidMount(){
      let daysLeft = this.calcDaysFromDate(this.props.appGoalDate);
      this.setState({days:daysLeft})

  }

  componentDidUpdate(_props,_state) {
      if(this.props.appGoalDate !== _props.appGoalDate) {
          let daysLeft = this.calcDaysFromDate(this.props.appGoalDate)
          this.setState({days:daysLeft})
      }

  }
  calcDaysFromDate (_date) {
      let time = Date.parse(_date) - Date.parse(new Date())
      let days = time / (1000 * 60 * 60 * 24)
      return Math.round(Math.abs(days))
  }

  render() {
    return (
      <div>
        <h2>Count Down to {this.props.appGoalDate}</h2>
        <h3>Days Left: {this.state.days}</h3>
      </div>
    );
  }
}

export default Counter;


/**
 * //Date Helpers
//Millesedons in Entire Day
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

//Today Date as String
const date = Date() //Sun Aug 16 2020 10:20:08 GMT+0300 (Israel Daylight Time)

//Difference Between Dates(to create countdown)
const firstDate = new Date(2008, 1, 12);
const secondDate = new Date(2008, 1, 22);
const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)); //Difference 
console.log(diffDays); //10
 */