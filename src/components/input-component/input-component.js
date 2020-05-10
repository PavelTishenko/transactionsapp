import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { lData } from '../../redux/actions';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';

import './input-component.css';

const Input = ({ data }) => {
    const { ExportCSVButton } = CSVExport;
    const dispatch = useDispatch();
    const onLoad = (data, fileInfo) => {
        dispatch(lData());
    };
   const products = [];
   data.forEach(el=>{
      const dataArr = el.split(',');
        products.push({
            TransactionId: dataArr[0],
            Status: dataArr[1],
            Type: dataArr[2],
            Clientname: dataArr[3],
            Amount: dataArr[4]
            })   
   }) 

   
   const columns=[
    {
        dataField:'TransactionId',
        text:'id'
    },
    {
        dataField:'Status',
        text: 'Status' 
    },
    {
        dataField:'Type',
        text: 'Type'
    },
    {
        dataField:'Clientname',
        text: 'Client name'
    },
    {
        dataField:'Amount',
        text: 'Amount'
    }];
    return (
        <div className="input-container">
            <label>
                Import
                <input id='file' type="file" onChange={onLoad} className="custom-file-input" />
            </label>
            <ToolkitProvider
                keyField="id"
                data={ products }
                columns={ columns }
                exportCSV
            >
            {
                props => (
                    <div>
                        <ExportCSVButton  {...props.csvProps}>Export</ExportCSVButton>
                        <hr />
                        <BootstrapTable {...props.baseProps} />
                    </div>
                )
            }
            </ToolkitProvider>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(Input);