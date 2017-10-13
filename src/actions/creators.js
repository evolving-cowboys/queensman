import * as t from './types';

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

};
