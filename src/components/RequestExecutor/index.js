import React from 'react';
import './index.css';


const RequestExecutor = ({
  enabled,
  loading,
  request,
  response,
  changeRequest,
  rpcCall,
}) => (
  <div className='RequestExecutor'>
    <div className='RequestExecutor-request'>
      <textarea
        className={`
          RequestExecutor-requestField
           ${request && request.data !== null
             ? ''
             : 'RequestExecutor-requestField__error'
           }
        `}
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
    <div className='RequestExecutor-response'>
      <pre className='RequestExecutor-responseViewer'>
        { response && response.repr }
      </pre>
    </div>
  </div>
);


export default RequestExecutor;
