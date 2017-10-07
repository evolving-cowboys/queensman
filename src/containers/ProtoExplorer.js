import { connect } from 'react-redux';
import { loadProto } from '../actions';
import View from '../components/ProtoExplorer';


const mapStateToProps = (state) => ({
  filename: state.proto.filename,
  descriptor: state.proto.descriptor,
});


const mapDispatchToProps = (dispatch) => ({
  loadProto: (filename) => dispatch(loadProto(filename)),
});

const ProtoExplorer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default ProtoExplorer;
