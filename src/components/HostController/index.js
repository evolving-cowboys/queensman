import React from 'react';


const HostController = ({ onHostChange, onPortChange, host, port }) => (
  <div className='HostController'>
    <div className='HostController-hostInput'>
      <input
        className='HostController-hostInput-field'
        type='url'
        value={host}
        onChange={(e) => onHostChange(e.target.value)}
        placeholder='GRPC server host'
      />
    </div>
    <div className='HostController-portInput'>
      <input
        className='HostController-portInput-field'
        type='number'
        min={1}
        max={65535}
        value={port}
        onChange={(e) => onPortChange(e.target.value)}
        placeholder='GRPC server port'
      />
    </div>
  </div>
);

export default HostController;
