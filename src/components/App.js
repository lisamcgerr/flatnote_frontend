
import React from 'react';
//import { BrowserRouter } from 'react-router-dom'
import GoalsContainer from './GoalsContainer'
import GoalForm from './GoalForm'
import { fetchGoalsSuccess } from '../actions'
import { connect } from 'react-redux'

class App extends React.Component {


  componentDidMount(){
    fetch('http://localhost:3000/goals')
    .then(resp => resp.json())
    .then(goals => {
      this.props.fetchGoalsSuccess(goals)
      })
  }
  

  render(){
    console.log(this.props, 'props in App.js')
    return (
      // <BrowserRouter>
      <div className="App">
        <h1>App</h1>
        <GoalsContainer />
        <GoalForm  />
      </div>
    // </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchGoalsSuccess: fetchGoalsSuccess
}

const mapStateToProps = (storeState) => {
  return {
    goals: storeState.goals
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

