import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { lData } from '../../redux/actions';
import ToolkitProvider, { CSVExport, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './input-component.css';

const Input = ({ data }) => {
    const { ToggleList } = ColumnToggle;
    const { ExportCSVButton } = CSVExport;
    const dispatch = useDispatch();
    const onLoad = (data, fileInfo) => {
        dispatch(lData());
    };
    const products = [];
    data.forEach(el => {
        const dataArr = el.split(',');
        products.push({
            TransactionId: dataArr[0],
            Status: dataArr[1],
            Type: dataArr[2],
            Clientname: dataArr[3],
            Amount: dataArr[4]
        })
    })

    
    const rankFormatter = () => {
        return(
            <div>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    }

    const columns = [
        {
            dataField: 'TransactionId',
            text: 'id'
        },
        {
            dataField: 'Status',
            text: 'Status'
        },
        {
            dataField: 'Type',
            text: 'Type'
        },
        {
            dataField: 'Clientname',
            text: 'Client name'
        },
        {
            dataField: 'Amount',
            text: 'Amount'
        },
        {
            dataField: 'Action',
            text: 'Action',
            formatter: rankFormatter
        }];

        const MyExportCSV = (props) => {
            const handleClick = () => {
              props.onExport();
            };
            return (
              <div>
                <button className="btn-export" onClick={ handleClick }>Export to CSV</button>
              </div>
            );
          };

    return (
        <div className="input-container">
            <div>
                <label>
                    <span className="import-span">Import</span>
                    <input id='file' type="file" onChange={onLoad} className="custom-file-input" />
                </label>
            </div>
            <ToolkitProvider
                keyField="id"
                data={products}
                columns={columns}
                exportCSV
            >
                {
                    props => (
                        <div>
                            <MyExportCSV  {...props.csvProps}>Export</MyExportCSV>
                            <hr />
                            <BootstrapTable striped bordered hover pagination={paginationFactory()} {...props.baseProps} />
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