import { connect } from 'react-redux';
import { RPC } from '../actions/creators';
import View from '../components/RequestExecutor';
import { compose } from '../lib/utils';


const mapStateToProps = (state) => ({
  loading: state.loading,
  request: state.request,
  response: state.response,
  enabled: Boolean(
    state.proto.currentCall && state.proto.currentCall.name
  ),
});


const mapDispatchToProps = (dispatch) => ({
  changeRequest: compose(dispatch, RPC.changeRequest),
  rpcCall: compose(dispatch, RPC.call),
});

const RequestExecutor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default RequestExecutor;
