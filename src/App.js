import React from 'react';

import './App.css';

import * as ReactBootstrap from 'react-bootstrap';
import Input from './components/input-component';
import Select from './components/select-component';

const App = () => {
  return (
    <div className="App">
      <Select/>
      <Input/>
    </div>
  );
};

export default App;
