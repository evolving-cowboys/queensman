import { connect } from 'react-redux';
import { PROTO } from '../actions/creators';
import View from '../components/ProtoExplorer';

import { compose } from '../lib/utils';


const mapStateToProps = (state) => ({
  filename: state.proto.filename,
  descriptor: state.proto.descriptor,

  stubNames: (
    state.proto.descriptor && Object.keys(state.proto.descriptor.services)
  ),
  callNames: (
    state.proto.currentStub 
    && Object.keys(state.proto.currentStub.constructor.service)
  ),

  currentStubName: state.proto.currentStub && state.proto.currentStub.name,
  currentCallName: state.proto.currentCall && state.proto.currentCall.name,
});


const mapDispatchToProps = (dispatch) => ({
  loadProto: compose(dispatch, PROTO.loadProto),
  selectStub: compose(dispatch, PROTO.selectStub),
  selectCall: compose(dispatch, PROTO.selectCall),
});

const ProtoExplorer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default ProtoExplorer;
