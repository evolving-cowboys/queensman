const _grpc = require('grpc');
const _electron = require('electron');

process.once('loaded', () => {
  global.grpc = _grpc;
  global.electron = _electron;
});
