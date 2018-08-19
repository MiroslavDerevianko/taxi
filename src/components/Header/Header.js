import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import style from './Header.css';

import { connect } from 'react-redux';

import { logout } from '../../actions/authaction';

class Header extends Component {

    renderSocial() {
        return (
            <div id="flexIcons">
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/twitter.png" alt="twitter" />
                    </a>
                </div>
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/facebook.png" alt="facebook" />
                    </a>
                </div>
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/instagram.png" alt="instagram" />
                    </a>
                </div>
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/reddit.png" alt="reddit" />
                    </a>
                </div>
                <div id="socialIcon">
                    <a href="#">
                        <img id="socialImg" src="../../public/Home/telegram.png" alt="telegram" />
                    </a>
                </div>
            </div>
        );
    }
    renderToggle() {
        if (!this.props.userData.user) {
            return (
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <NavLink to="/sign-in"><li>SIGN IN</li></NavLink>
                        <NavLink to="/ride"><li>RIDE</li></NavLink>
                        <NavLink to="/drive"><li>DRIVE</li></NavLink>
                        <h2 id="readMore__h2">Go in <span id="yellow_span">social</span></h2>
                        {this.renderSocial()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <NavLink to="/profile"><li>Profile</li></NavLink>
                        <NavLink to="/ride"><li>RIDE</li></NavLink>
                        <NavLink to="/drive"><li>DRIVE</li></NavLink>
                        <h2 id="readMore__h2">Go in <span id="yellow_span">social</span></h2>
                        {this.renderSocial()}
                    </ul>
                </div>
            );
        }
    }

    renderLinks() {
        if (!this.props.userData.user) {
            return (
                <div className={style.sign_in}>
                    <div className={style.rideDriveItem + " " + style.sign_in__block}>
                        <NavLink to="/sign-in" activeClassName={style.active} className={style.sign_in__block__a}><button className={style.bannerBtn + " " + style.driveBtn}>SIGN IN</button></NavLink>
                    </div>
                    <div className={style.rideDriveItem}>
                        <NavLink to="/sign-up-driver"><button className={style.bannerBtn + " " + style.becomeDriverBtn}>BECOME A DRIVER</button></NavLink>
                    </div>
                    {this.renderToggle()}
                </div>
            );
        } else {
            return (
                <div className={style.sign_in}>
                    <div className={style.rideDriveItem + " " + style.sign_in__block}>
                        <NavLink to="/profile" activeClassName={style.active} className={style.sign_in__block__a}><button className={style.bannerBtn + " " + style.driveBtn}>Profile</button></NavLink>
                    </div>
                    <div className={style.rideDriveItem}>
                        <div className={`${style.sign_in__block__a}`}><button className={style.bannerBtn + " " + style.driveBtn } onClick={this.props.logout}>Log out</button></div>
                    </div>
                    {this.renderToggle()}
                </div>
            );
        }
    }
    render() {
        return (
            <div className={style.header}>
                <div className={style.headerInner}>
                    <div className={style.headerFlex}>
                        <div className={style.logo}>
                            <Link to="/home" className={style.headerLogo__a}><button className={style.homeBtn}>
                                <h1><span className={style.yellow_span}>Taxi</span><span className={style.toggle_span}>Coin</span></h1>
                            </button></Link>
                            <div className={style.rideDrive}>
                                <div className={style.rideDriveItem}>
                                    <NavLink to="/ride" activeClassName={style.active} className={style.rideDriveItem__a}><button className={style.bannerBtn + " " + style.driveBtn}>Ride</button></NavLink>
                                </div>
                                <div className={style.rideDriveItem}>
                                    <NavLink to="/drive" activeClassName={style.active} className={style.rideDriveItem__a}><button className={style.bannerBtn + " " + style.driveBtn}>Drive</button></NavLink>
                                </div>
                            </div>
                        </div>
                        {this.renderLinks()}
                        {/* <div className={style.sign_in}>
                            <div className={style.rideDriveItem + " " + style.sign_in__block}>
                                <NavLink to="/sign-in" activeClassName={style.active} className={style.sign_in__block__a}><button className={style.bannerBtn + " " + style.driveBtn}>SIGN IN</button></NavLink>
                            </div>
                            <div className={style.rideDriveItem}>
                                <NavLink to="/sign-up-driver"><button className={style.bannerBtn + " " + style.becomeDriverBtn}>BECOME A DRIVER</button></NavLink>
                            </div>
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <NavLink to="/sign-in"><li>SIGN IN</li></NavLink>
                                    <NavLink to="/ride"><li>RIDE</li></NavLink>
                                    <NavLink to="/drive"><li>DRIVE</li></NavLink>
                                    <h2 id="readMore__h2">Go in <span id="yellow_span">social</span></h2>
                                    <div id="flexIcons">
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/twitter.png" alt="twitter" />
                                            </a>
                                        </div>
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/facebook.png" alt="facebook" />
                                            </a>
                                        </div>
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/instagram.png" alt="instagram" />
                                            </a>
                                        </div>
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/linkedin.png" alt="linkedin" />
                                            </a>
                                        </div>
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/reddit.png" alt="reddit" />
                                            </a>
                                        </div>
                                        <div id="socialIcon">
                                            <a href="#">
                                                <img id="socialImg" src="../../public/Home/telegram.png" alt="telegram" />
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    userData: PropTypes.object,
    logout: PropTypes.func,
}

const mapStateToProps = state => ({
    userData: state.userData
})

const mapDispatchtoProps = dispatch => ({
    logout: () => { dispatch(logout()) }
})

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
