import React from 'react';
import './ProtoLoader.css';


class ProtoLoader extends React.Component {
  loadProto = () => {
    const dialog = window.electron.remote.dialog;
    const paths = dialog.showOpenDialog({
      title: 'Load Proto File',
      defaultPath: '.',
      filters: [
        {name: 'Protobuf', extensions: ['proto']},
        {name: 'All Files', extensions: ['*']},
      ],
      properties: [
        'openFile',
      ],
    });
    if (paths && paths.length > 0) {
      this.props.loadProto(paths[0]);
    }
  }

  render() {
    return (
      <div className='ProtoLoader'>
        <span className='ProtoLoader-filename'>
          { this.props.filename ? this.props.filename : 'No file chosen' }
        </span>
        <button
          className='ProtoLoader-loadButton'
          onClick={this.loadProto}
        >
          { this.props.filename ? 'Choose another file' : 'Chose file' }
        </button>
      </div>
    );
  };
};

export default ProtoLoader;
