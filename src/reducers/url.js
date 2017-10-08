
import * as actions from '../actions';


const url = (state = { host: 'http://localhost', port: 50051 }, action) => {
  switch (action.type) {
    case actions.URL.HOST_CHANGED:
      return Object.assign({}, state, {
        host: action.host,
      });
    case actions.URL.PORT_CHANGED:
      return Object.assign({}, state, {
        port: action.port,
      });
    default:
      return state;
  }
};

export default url;
