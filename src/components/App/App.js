import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Ride from '../Ride/Ride';
import Drive from '../Drive/Drive';
import SignIn from '../Sign_in/Sign_in';
import SignInRider from '../Sign_in/Sign_in_rider/Sign_in_rider';
import SignInDriver from '../Sign_in/Sign_in_driver/Sign_in_driver';
import SignUpRider from '../Sign_up/Sign_up_rider/Sign_up_rider';
import SignUpDriver from '../Sign_up/Sign_up_driver/Sign_up_driver';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Policy from '../Policy/Policy';
import Profile from '../Profile/Profile';

// test connect redux to react
import { connect } from 'react-redux';
// import our actionCreator
import { testRun } from '../../actions/testaction';
import { getDriver } from '../../actions/authaction';

class App extends Component {
  componentDidMount() {
    // we can call mapped actionCreator from props
    this.props.runTest('Test is passed');
    console.log('Mount');
    this.props.getDriver();
    console.log('Driver');
  }
  render() {
    // if redux connect and data mapped we can use it in props
    // react reload component when props is changed
    if (this.props.testData) {
      console.log(this.props.testData.message);
    }
    return (<Router history={this.props.history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/ride" component={Ride} />
        <Route path="/drive" component={Drive} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-in-rider" component={SignInRider} />
        <Route path="/sign-in-driver" component={SignInDriver} />
        <Route path="/sign-up-rider" component={SignUpRider} />
        <Route path="/sign-up-driver" component={SignUpDriver} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/policy" component={Policy} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>);
  }
}

// Check props type
App.propTypes = {
  // Check data
  // testData must be a object
  testData: PropTypes.object,
  // runTest must be a function 
  runTest: PropTypes.func,
  // history must be a object
  history: PropTypes.object,
  getDriver: PropTypes.func
}

// Func which map State to props
const mapStateToProps = state => ({
  testData: state.testData,
  history: state.historyData.history
})

// Func which map actionCreators to props
const mapDispatchtoProps = dispatch => ({
  runTest: (mess) => { dispatch(testRun(mess)) },
  getDriver: () => { dispatch(getDriver()) }
})

// Finally connect react component to redux (use connect tool)
export default connect(mapStateToProps, mapDispatchtoProps)(App);
