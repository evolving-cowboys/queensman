import { Descriptor } from '../lib/domain';
import * as actions from '../actions/types';


const proto = (
  state = { 
    descriptor: null, 
    filename: null,
    currentStub: null,
    currentCall: null,
  }, 
  action
) => {
  switch (action.type) {
    case actions.PROTO.LOAD:
      const grpcDescriptor = window.grpc.load(action.filename);
      const descriptor = new Descriptor(grpcDescriptor);
      return Object.assign({}, state, {
        descriptor,
        filename: action.filename,
        currentStub: null,
        currentCall: null,
      });
    case actions.PROTO.STUB_SELECTED:
      return Object.assign({}, state, {
        currentStub: {
          name: action.stub,
          constructor: state.descriptor.services[action.stub],
        },
        currentCall: null,
      });
    case actions.PROTO.CALL_SELECTED:
      return Object.assign({}, state, {
        currentCall: {
          name: action.call,
          descriptor: state.currentStub.constructor[action.call],
        },
      });
    default:
      return state;
  }
};

export default proto;
