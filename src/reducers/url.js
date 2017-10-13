import { URL } from '../actions/types';


const url = (state = { host: 'localhost', port: 50051 }, action) => {
  switch (action.type) {
    case URL.HOST_CHANGED:
      return Object.assign({}, state, {
        host: action.host,
      });
    case URL.PORT_CHANGED:
      return Object.assign({}, state, {
        port: action.port,
      });
    default:
      return state;
  }
};

export default url;
