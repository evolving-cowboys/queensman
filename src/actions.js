export const URL = {
  HOST_CHANGED: 'URL-HOST_CHANGED',
  PORT_CHANGED: 'URL-PORT_CHANGED',
};

export const changeHost = (host) => ({
  type: URL.HOST_CHANGED,
  host,
});

export const changePort = (port) => ({
  type: URL.PORT_CHANGED,
  port,
});


export const PROTO = {
  LOAD: 'PROTO-LOAD',
};

export const loadProto = (filename) => ({
  type: PROTO.LOAD,
  filename,
});
