import { connect } from 'react-redux';
import { changeHost, changePort } from '../actions';
import View from '../components/HostController';


const mapStateToProps = (state) => ({
  host: state.url.host,
  port: state.url.port,
});


const mapDispatchToProps = (dispatch) => ({
  onHostChange: (host) => dispatch(changeHost(host)),
  onPortChange: (port) => dispatch(changePort(port)),
});

const HostController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default HostController;
