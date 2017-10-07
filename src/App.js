import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import HostController from './containers/HostController';
import ProtoExplorer from './containers/ProtoExplorer';


const App = () => (
  <div className="App">
    <Header />
    <HostController />
    <ProtoExplorer />
    <Footer />
  </div>
);

export default App;
