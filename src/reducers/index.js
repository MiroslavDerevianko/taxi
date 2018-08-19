// Index.js compose all custome reducers in one

import { combineReducers } from 'redux';

// here import custom reducers
import { testData } from './testreducer';
import { userData, tokenData, photoData } from './authreducer';
import { historyData } from './historyreducer';
// Here combine custome reducers
export default combineReducers({
    testData,
    userData,
    tokenData,
    historyData,
    photoData,
})