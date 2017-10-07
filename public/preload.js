const _grpc = require('grpc');

process.once('loaded', () => {
  global.grpc = _grpc;
});
