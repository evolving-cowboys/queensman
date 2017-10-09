import React from 'react';
import ProtoLoader from './ProtoLoader';
import RequestRunner from './RequestRunner';


const ProtoExplorer = ({ descriptor, filename, loadProto, url }) => (
  <div className='ProtoExplorer'>
    <ProtoLoader
      filename={filename}
      loadProto={loadProto}
    />
    { descriptor 
      ? <RequestRunner descriptor={descriptor} url={url} />
      : <span>Please, load a proto file</span>}
  </div>
);

export default ProtoExplorer;
