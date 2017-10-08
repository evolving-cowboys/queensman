import React from 'react';
import ProtoLoader from './ProtoLoader';


const ProtoExplorer = ({ descriptor, filename, loadProto }) => (
  <div className='ProtoExplorer'>
    <ProtoLoader
      filename={filename}
      loadProto={loadProto}
    />
    { descriptor 
      ? <span>Not implemented yet</span>
      : <span>Please, load a proto file</span>}
  </div>
);

export default ProtoExplorer;
