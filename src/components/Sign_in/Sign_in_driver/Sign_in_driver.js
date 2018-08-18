import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import styleSignIn from '../Sign_in.css';
import styleHome from '../../Home/Home.css';
import styleHeader from '../../Header/Header.css';
import styleSignInRider from '../Sign_in_rider/Sign_in_rider.css';

import { connect } from 'react-redux';
import { loginDriver } from '../../../actions/authaction';

class SignInDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null
        }
    }
    componentDidMount() {
        if (this.props.userData.user) {
            this.props.history.replace('/profile');
        }
    }
    componentDidUpdate() {
        if (this.props.userData.user) {
            this.props.history.replace('/profile');
        }
    }
    submit() {
        this.props.login(this.state);
        return false;
    }
    render() {
        return (
            <div className={styleSignInRider.signInBackground}>
                <div className={styleSignInRider.orangeBackground}></div>
                <div className={styleHeader.logo}>
                    <Link to="/home" className={styleHeader.headerLogo__a + ' ' + styleSignInRider.signInLogo}><button className={styleHeader.homeBtn}>
                        <h1 className={styleSignInRider.headerLogo__h1}><span className={styleHeader.yellow_span}>Taxi</span><span className={styleHeader.toggle_span}>Coin</span></h1>
                    </button></Link>
                </div>
                <div className={styleSignInRider.signInInner}>
                    <h1 className={styleSignIn.title__h1 + ' ' + styleSignInRider.signInTitle}>Sign <span className={styleHome.yellow_span}>In</span> as driver</h1>
                    <span className={styleSignInRider.inputSpan}>Enter your data</span>
                    <form>
                        <input className={styleSignInRider.signInInput} type="email" placeholder="Your email adress" onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                        <Link to="/forgot-password" className={styleSignInRider.forgotPass}><span>Forgot your password ?</span></Link>
                        <input className={styleSignInRider.signInInput} type="password" placeholder="Your password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        <input className={styleSignInRider.signInInput + ' ' + styleSignInRider.signInInputSubmit} type="button" value="Submit" onClick={this.submit.bind(this)} />
                    </form>
                    <span>Don't have an account? <NavLink to="/sign-up-driver" className={styleSignInRider.signUpSmallBtn}>Sign up</NavLink></span>
                </div>
            </div>
        );
    }
}

SignInDriver.propTypes = {
    userData: PropTypes.object,
    login: PropTypes.func,
    history: PropTypes.object,
}

const mapStateToProps = state => ({
    userData: state.userData,
    history: state.historyData.history
})


const mapDispatchtoProps = dispatch => ({
    login: (data) => { dispatch(loginDriver(data)) }
})

export default connect(mapStateToProps, mapDispatchtoProps)(SignInDriver);
