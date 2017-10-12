import { connect } from 'react-redux';
import { URL } from '../actions/creators';
import View from '../components/HostController';
import { compose } from '../utils';


const mapStateToProps = (state) => ({
  host: state.url.host,
  port: state.url.port,
});


const mapDispatchToProps = (dispatch) => ({
  onHostChange: compose(dispatch, URL.changeHost),
  onPortChange: compose(dispatch, URL.changePort),
});

const HostController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default HostController;
