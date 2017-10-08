import React from 'react';
import ProtoLoader from './ProtoLoader';
import RequestRunner from './RequestRunner';


const ProtoExplorer = ({ descriptor, filename, loadProto }) => (
  <div className='ProtoExplorer'>
    <ProtoLoader
      filename={filename}
      loadProto={loadProto}
    />
    { descriptor 
      ? <RequestRunner descriptor={descriptor} />
      : <span>Please, load a proto file</span>}
  </div>
);

export default ProtoExplorer;
