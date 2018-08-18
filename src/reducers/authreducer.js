import {
    USER_FETCH_START,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILED,
    USER_DELETE,
    TOKEN_SUCCESS,
    TOKEN_DELETE,
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

export { userData, tokenData };