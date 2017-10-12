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
      let requestData;
      try {
        requestData = JSON.parse(action.request);
      } catch (_) {
        // TODO: better error handling
        requestData = null;
      }

      return Object.assign({}, state, {
        request: { raw: action.request, data: requestData },
      });
    case (actions.RPC.RESPONSE_RECEIVED):
      let responseRepr;
      try {
        responseRepr = JSON.stringify(action.response, null, '\t');
      } catch (_) {
        responseRepr = null;
      }
      return Object.assign({}, state, {
        response: {
          raw: action.response,
          repr: responseRepr,
        },
        loading: false,
      });
    case (actions.RPC.PREPARE_CALL):
      const { host, port } = state.url; 
      const requestUrl = `${host}:${port}`;
      const { currentStub } = state.proto;

      const urlServices = state.urlServiceMap[requestUrl] || {};
      if (urlServices[currentStub.name]) return state;
      
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
        url: proto(state.url, action),
      });
  }
}

export default queensmanApp;
