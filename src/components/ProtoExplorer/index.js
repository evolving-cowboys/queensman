import React from 'react';
import ProtoLoader from './ProtoLoader';
import StubSelector from './StubSelector';
import CallSelector from './CallSelector';


const ProtoExplorer = ({
  filename, loadProto,
  stubNames, currentStubName, selectStub,
  callNames, currentCallName, selectCall,
}) => (
  <div className='ProtoExplorer'>
    <ProtoLoader
      filename={filename}
      loadProto={loadProto}
    />
    { stubNames && stubNames.length > 0 && (
        <StubSelector
          stubNames={stubNames}
          currentStubName={currentStubName}
          selectStub={selectStub}
        />
    )}
    { callNames && callNames.length > 0 && (
        <CallSelector
          callNames={callNames}
          currentCallName={currentCallName}
          selectCall={selectCall}
        />
    )}
  </div>
);

export default ProtoExplorer;
