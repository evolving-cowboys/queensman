import * as actions from '../actions/types';
import proto from './proto';
import url from './url';


const queensmanApp = (
  state = {
    url: {
      host: 'localhost',
      port: 50051,
    },
    request: null,
    response: null,
    urlServiceMap: {},
    loading: false,
  }, 
  action
) => {
  switch (action.type) {
    case (actions.RPC.REQUEST_CHANGED):
      return Object.assign({}, state, {
        request: {
          raw: action.raw,
          data: action.data,
        },
      });
    case (actions.RPC.RESPONSE_RECEIVED):
      return Object.assign({}, state, {
        response: {
          raw: action.raw,
          repr: action.repr,
        },
        loading: false,
      });
    case (actions.RPC.PREPARE_CALL):
      // FIXME: move logic to action!!! (TODO: how????)
      const { host, port } = state.url; 
      const requestUrl = `${host}:${port}`;
      const { currentStub } = state.proto;

      const urlServices = state.urlServiceMap[requestUrl] || {};
      if (urlServices[currentStub.name]) return state;
      
      // FIXME; this should in ACTION
      const serviceStub = new currentStub.constructor(
        requestUrl,
        window.grpc.credentials.createInsecure(),
      );

      return Object.assign({}, state, {
        urlServiceMap: Object.assign({}, state.urlServiceMap, {
          [requestUrl]: Object.assign({}, urlServices, {
            [currentStub.name]: serviceStub,
          }),
        }),
        loading: true,
      });
    default:
      return Object.assign({}, state, {
        proto: proto(state.proto, action),
        url: url(state.url, action),
      });
  }
}

export default queensmanApp;
