import React from "react";
import { connect } from 'react-redux'

export default class GoalForm extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <h3>Set a Goal</h3>
        <form className="ui form">
          <input type='' />
         
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   fetchGoalsSuccess: fetchGoalsSuccess
// }


//export default connect(mapDispatchToProps)(GoalForm)
