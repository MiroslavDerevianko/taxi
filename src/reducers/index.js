// Index.js compose all custome reducers in one

import { combineReducers } from 'redux';

// here import custom reducers
import { testData } from './testreducer';
import { userData, tokenData } from './authreducer';
import { historyData } from './historyreducer';
// Here combine custome reducers
export default combineReducers({
    testData,
    userData,
    tokenData,
    historyData,
})