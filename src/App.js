import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import HostController from './containers/HostController';
import ProtoExplorer from './containers/ProtoExplorer';
import RequestExecutor from './containers/RequestExecutor';


const App = () => (
  <div className="App">
    <Header />
    <main className="Content">
      <HostController />
      <ProtoExplorer />
      <RequestExecutor />
    </main>
    <Footer />
  </div>
);

export default App;
