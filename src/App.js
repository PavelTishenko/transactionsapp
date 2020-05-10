import React, { useState } from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import CSVReader from 'react-csv-reader';
import Table from './table';
import { useDispatch } from 'react-redux';
import { lData } from './redux/actions';
import { connect } from 'react-redux'

import Select from './components/select-component';

const App = () => {

  const dispatch = useDispatch();
  const  onLoad =  (data, fileInfo) => {
    dispatch(lData()) 
  }; 

  return (
    <div className="App">
      <Select/>
      <CSVReader
        title=" " 
        onFileLoaded={onLoad}/>
      <Table />
    </div>
  );
}

export default App;
