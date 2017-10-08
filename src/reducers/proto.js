import * as actions from '../actions';


const proto = (state = { descriptor: null, filename: null }, action) => {
  switch (action.type) {
    case actions.PROTO.LOAD:
      return Object.assign({}, state, {
        descriptor: window.grpc.load(action.filename),
        filename: action.filename,
      });
    default:
      return state;
  }
};

export default proto;
