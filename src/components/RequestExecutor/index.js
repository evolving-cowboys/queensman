import React from 'react';


const RequestExecutor = ({ 
  enabled,
  loading,
  request,
  response,
  changeRequest,
  rpcCall,
}) => (
  <div className='RequestExecutor'>
    <div>
      <textarea
        className='RequestExecutor-requestField'
        value={request && request.raw}
        onChange={(e) => changeRequest(e.target.value)}
      />
      <button
        className='RequestExecutor-button'
        type='button'
        disabled={!enabled || loading || !(request && request.data !== null)}
        onClick={rpcCall}
      >
        { loading ? 'Wait ...' : 'Call !!!' }
      </button>
    </div>
    <pre className='RequestExecutor-responseViewer'>
      { response && response.repr }
    </pre>
  </div>
);


export default RequestExecutor;
