import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Profile extends Component {
    componentDidMount() {
        if (!this.props.userData.user) {
            this.props.history.replace('/sign-in');
        }
    }
    componentDidUpdate() {
        if (!this.props.userData.user) {
            this.props.history.replace('/sign-in');
        }
    }
    render() {
        if (this.props.userData.user) {
            return (
                <div>
                    <h1>Profile</h1>
                    <h3>Name: {this.props.userData.user.firstName} {this.props.userData.user.lastName}</h3>
                    <h3>Email: {this.props.userData.user.email}</h3>
                    <h3>Phone: {this.props.userData.user.phoneNumber}</h3>
                    <h3>City: {this.props.userData.user.city}</h3>
                </div>
            );
        }
        return null;
    }
}

// Check props type
Profile.propTypes = {
    history: PropTypes.object,
    userData: PropTypes.object,
}

const mapStateToProps = state => ({
    history: state.historyData.history,
    userData: state.userData,
})

const mapDispatchtoProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchtoProps)(Profile);
