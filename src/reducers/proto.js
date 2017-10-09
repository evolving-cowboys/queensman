import { Descriptor } from '../lib/domain';
import * as actions from '../actions';


const proto = (state = { descriptor: null, filename: null }, action) => {
  switch (action.type) {
    case actions.PROTO.LOAD:
      const grpcDescriptor = window.grpc.load(action.filename);
      const descriptor = new Descriptor(grpcDescriptor);
      return Object.assign({}, state, {
        descriptor,
        filename: action.filename,
      });
    default:
      return state;
  }
};

export default proto;
