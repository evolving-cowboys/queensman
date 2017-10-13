import * as t from './types';
import { compose } from '../lib/utils';


export const URL = {
  changePort: (port) => ({
    type: t.URL.PORT_CHANGED,
    port,
  }),

  changeHost: (host) => ({
    type: t.URL.PORT_CHANGED,
    host,
  }),
};


export const PROTO = {
  loadProto: (filename) => ({
    type: t.PROTO.LOAD,
    filename,
  }),

  selectStub: (stub) => ({
    type: t.PROTO.STUB_SELECTED,
    stub,
  }),

  selectCall: (call) => ({
    type: t.PROTO.CALL_SELECTED,
    call,
  }),
};


export const RPC = {
  changeRequest: (request) => ({
    type: t.RPC.REQUEST_CHANGED,
    request,
  }),

  receiveResponse: (response) => ({
    type: t.RPC.RESPONSE_RECEIVED,
    response,
  }),

  prepareCall: () => ({
    type: t.RPC.PREPARE_CALL,
  }),
  
  call: () => (dispatch, getState) => {
    dispatch(RPC.prepareCall());
    const state = getState();

    const { host, port } = state.url;
    const requestUrl = `${host}:${port}`;
    const { currentStub: { name: stubName } } = state.proto;
    const { currentCall: { name: callName } } = state.proto;

    const stub = state.urlServiceMap[requestUrl][stubName];
    const call = stub[callName].bind(stub);

    const requestData = state.request.data;
    return new Promise((resolve, reject) => {
      call(requestData, (err, response) => {
        if (err) { reject(err); return; }
        resolve(response); 
      });
    })
    .then(compose(dispatch, RPC.receiveResponse));
  },
};
