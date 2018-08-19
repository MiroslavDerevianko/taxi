import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';


import { connect } from 'react-redux';

import { uploadPhoto, logout } from '../../actions/authaction';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newphoto: null,
            newphotourl: null,
        }
        this.chooseNewPhoto = this.chooseNewPhoto.bind(this);
    }
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
    chooseNewPhoto(e) {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ newphotourl: reader.result });
            };
            reader.readAsDataURL(file);
            this.setState({ newphoto: file });
        }
    }
    uploadNewPhoto() {
        if (this.state.newphoto) {
            console.log('Upload photo');
            this.props.uploadPhoto(this.state.newphoto);
        }
    }
    render() {
        if (this.props.userData.user) {
            return (
                <div>
                    <Header></Header>
                    <h1>Profile</h1>
                    <img src={this.props.photoData.url} alt='photo'/>
                    <h3>Name: {this.props.userData.user.firstName} {this.props.userData.user.lastName}</h3>
                    <h3>Email: {this.props.userData.user.email}</h3>
                    <h3>Phone: {this.props.userData.user.phoneNumber}</h3>
                    <h3>City: {this.props.userData.user.city}</h3>

                    <button onClick={this.props.logout}>Logout</button>

                    <h1>Change Photo</h1>
                    <input type='file' accept='image/*' onChange={(e) => { this.chooseNewPhoto(e) }} />
                    <button onClick={this.uploadNewPhoto.bind(this)}>Apply</button>
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
    uploadPhoto: PropTypes.func,
    logout: PropTypes.func,
    photoData: PropTypes.object,
}

const mapStateToProps = state => ({
    history: state.historyData.history,
    userData: state.userData,
    photoData: state.photoData
})

const mapDispatchtoProps = dispatch => ({
    uploadPhoto: (file) => { dispatch(uploadPhoto(file)) },
    logout: () => { dispatch(logout()) }
})

export default connect(mapStateToProps, mapDispatchtoProps)(Profile);
