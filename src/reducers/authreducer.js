import {
    USER_FETCH_START,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILED,
    USER_DELETE,
    TOKEN_SUCCESS,
    TOKEN_DELETE,
    USERPHOTO_FETCH_START,
    USERPHOTO_FETCH_SUCCESS,
    USERPHOTO_FETCH_FAILED,
} from '../actions/authaction';

const initUserData = {
    user: null,
    loading: false,
    error: null,
}

const userData = (state = initUserData, action) => {
    switch (action.type) {
        case USER_FETCH_START:
            return { user: null, error: null, loading: true };
        case USER_FETCH_SUCCESS:
            return { user: action.user, error: null, loading: false }
        case USER_FETCH_FAILED: {
            console.log(action.error);
            return { user: null, error: action.error, loading: false }
        }
        case USER_DELETE:
            return initUserData;
        default: return state;
    }
}

const initTokenData = {
    token: null
}

const tokenData = (state = initTokenData, action) => {
    switch (action.type) {
        case TOKEN_SUCCESS: {
            localStorage.setItem('Taxi_Token', JSON.stringify(action.token));
            return { token: action.token };
        }
        case TOKEN_DELETE: {
            localStorage.removeItem('Taxi_Token');
            return initTokenData;
        }
        default: return state;
    }
}

const initPhotoState = {
    blob: null,
    url: null,
    loading: false,
    error: null,
}

const photoData = (state = initPhotoState, action) => {
    switch (action.type) {
        case USERPHOTO_FETCH_START: return { blob: null, url: null, loading: true, error: null };
        case USERPHOTO_FETCH_SUCCESS: return { blob: action.blob, url: action.url, loading: false, error: null };
        case USERPHOTO_FETCH_FAILED: return { blob: null, url: null, loading: false, error: action.error }
        default: return  state;
    }
}

export { userData, tokenData, photoData };