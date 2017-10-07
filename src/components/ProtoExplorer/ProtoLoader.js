import React from 'react';


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
        {this.props.filename
          ? <span className='ProtoLoader-filename'>{this.props.filename}</span>
          : null}
        <div className='ProtoLoader-fileLoader'>
          <button
            className='ProtoLoader-fileLoader-button'
            onClick={this.loadProto}
          >
            Choose file...
          </button>
        </div>
      </div>
    );
  };
};

export default ProtoLoader;
