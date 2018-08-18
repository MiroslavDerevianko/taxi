import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import styleSignIn from '../Sign_in.css';
import styleHome from '../../Home/Home.css';
import styleHeader from '../../Header/Header.css';
import style from './Sign_in_rider.css';

class SignInRider extends Component {
    render() {
        return (
            <div className={style.signInBackground}>
                <div className={style.orangeBackground}></div>
                <div className={styleHeader.logo}>
                    <Link to="/home" className={styleHeader.headerLogo__a + ' ' + style.signInLogo}><button className={styleHeader.homeBtn}>
                        <h1 className={style.headerLogo__h1}><span className={styleHeader.yellow_span}>Taxi</span><span className={styleHeader.toggle_span}>Coin</span></h1>
                    </button></Link>
                </div>
                <div className={style.signInInner}>
                    <h1 className={styleSignIn.title__h1 + ' ' + style.signInTitle}>Sign <span className={styleHome.yellow_span}>In</span> as rider</h1>
                    <span className={style.inputSpan}>Enter your data</span>
                    <form>
                        <input className={style.signInInput} type="email" placeholder="Your email adress" />
                        <Link to="/forgot-password" className={style.forgotPass}><span>Forgot your password ?</span></Link>
                        <input className={style.signInInput} type="password" placeholder="Your password" />
                        <input className={style.signInInputSubmit} type="submit" value="Submit" />
                    </form>
                    <span>Don't have an account? <NavLink to="/sign-up-rider" className={style.signUpSmallBtn}>Sign up</NavLink></span>
                </div>
            </div>
        );
    }
}

export default SignInRider;
