export const USER_FETCH_START = 'USER_FETCH_START';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILED = 'USER_FETCH_ERROR';
export const USER_DELETE = 'USER_DELETE';

export const USERPHOTO_FETCH_START = 'USERPHOTO_FETCH_START';
export const USERPHOTO_FETCH_SUCCESS = 'USERPHOTO_FETCH_SUCCESS';
export const USERPHOTO_FETCH_FAILED = 'USERPHOTO_FETCH_FAILED';

export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
// export const TOKEN_FAILED = 'TOKEN_FAILED';
export const TOKEN_DELETE = 'TOKEN_DELETE';

import { apiurl } from '../appconfig';

const userStart = () => ({
    type: USER_FETCH_START
});

const userSuccess = (user) => ({
    type: USER_FETCH_SUCCESS,
    user
});

const userFailed = (error) => ({
    type: USER_FETCH_FAILED,
    error
});

const userDelete = () => ({
    type: USER_DELETE
});

const tokenSuccess = (token) => ({
    type: TOKEN_SUCCESS,
    token
});

const tokenDelete = () => ({
    type: TOKEN_DELETE
})

const photoStart = () => ({
    type: USERPHOTO_FETCH_START
});

const photoSuccess = (photodata) => ({
    type: USERPHOTO_FETCH_SUCCESS,
    photodata
});

const photoFailed = (error) => ({
    type: USERPHOTO_FETCH_FAILED,
    error
});

const checkAndGetToken = (getState) => {
    if (getState().tokenData.token) {
        return getState().tokenData.token;
    }
    if (localStorage.getItem('Taxi_Token')) {
        return (JSON.parse(localStorage.getItem('Taxi_Token')));
    } 
    return null;
}

// actionCreator register driver
export const registerDriver = (regdata) => (dispatch, getState) => {
    dispatch(userStart());
    fetch(`${apiurl}/api/accounts/drivers`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(regdata)
    })
        .then(res => res.json())
        .then(data => {
            loginDriver({ userName: regdata.userName, password: regdata.password });
        })
        .catch(error => { dispatch(userFailed(error.message)) });
}

// actionCreator login driver
export const loginDriver = (logdata) => (dispatch, getState) => {
    dispatch(userStart());
    fetch(`${apiurl}/api/Auth/driver/signuptoken`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(logdata)
    })
        .then(res => res.json())
        .then(token => {
            dispatch(tokenSuccess(token));
            dispatch(getDriver());
        })
        .catch(error => dispatch(userFailed(error.message)));
}

// actionCreator get driver profile
export const getDriver = () => (dispatch, getState) => {
    const token = checkAndGetToken(getState);
    if (token) {
        fetch(`${apiurl}/api/accounts/drivers/${token.id}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token.auth_token}`
            })
        })
            .then(res => res.json())
            .then(data => {
                dispatch(userSuccess(data));
            })
            .catch(error => dispatch(userFailed(error.message)));
    } else {
        // dispatch(logout());
    }
}

// actionCreator log out user
export const logout = () => (dispatch, getState) => {
    dispatch(userDelete());
    dispatch(tokenDelete());
}

// actionCreator get user photo (not ready)
const getPhoto = (token, photoid) => (dispatch, getState) => {
    dispatch(photoStart());
    if (token) {
        fetch(`${apiurl}/api/images/${photoid}`)
            .then(res => res.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(url => {
                console.log(url);
            })
            .catch(error => dispatch(photoFailed(error.message)));
    }
}