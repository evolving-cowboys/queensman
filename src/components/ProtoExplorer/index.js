import React from 'react';
import ProtoLoader from './ProtoLoader';
import Selector from './Selector';
import './index.css';


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
    <div className='ProtoExplorer-selectors'>
      { stubNames && stubNames.length > 0 && (
        <div className='ProtoExplorer-stubSelector'>
          <div className='ProtoExplorer-stubSelector-title'>
            Select Service Stub
          </div>
          <Selector
            items={stubNames}
            selectedItem={currentStubName}
            onSelect={selectStub}
          />
        </div>
      )}
      { callNames && callNames.length > 0 && (
        <div className='ProtoExplorer-callSelector'>
          <div className='ProtoExplorer-callSelector-title'>
            Select RPC Call
          </div>
          <Selector
            items={callNames}
            selectedItem={currentCallName}
            onSelect={selectCall}
          />
        </div>
      )}
    </div>
  </div>
);

export default ProtoExplorer;
