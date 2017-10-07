import { combineReducers } from 'redux';
import proto from './proto';
import url from './url';


const queensmanApp = combineReducers({
  proto,
  url,
});


export default queensmanApp;
