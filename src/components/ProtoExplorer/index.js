import React from 'react';
import ProtoLoader from './ProtoLoader';
import Selector from './Selector';


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
      <div>
        <div>Select Service Stub</div>
        <Selector
          items={stubNames}
          selectedItem={currentStubName}
          onSelect={selectStub}
        />
      </div>
    )}
    { callNames && callNames.length > 0 && (
      <div>
        <div>Select RPC Call</div>
        <Selector
          items={callNames}
          selectedItem={currentCallName}
          onSelect={selectCall}
        />
      </div>
    )}
  </div>
);

export default ProtoExplorer;
