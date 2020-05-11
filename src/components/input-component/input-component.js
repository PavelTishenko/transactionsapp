import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { lData } from '../../redux/actions';
import ToolkitProvider, { CSVExport, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
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

    const selectOptions = {
        0: 'good',
        1: 'Bad',
        2: 'unknown'
    };

    const selectOpt = {
        0: 'Withdrawal',
        1: 'Refill'
    };

    const columns = [
        {
            dataField: 'TransactionId',
            text: 'id'
        },
        {
            dataField: 'Status',
            text: 'Status',
            // filter: selectFilter({
            //     options: selectOptions,
            //     className: 'filter-classname'
            //   })
        },
        {
            dataField: 'Type',
            text: 'Type',
            filter: selectFilter({
                options: selectOpt,
                className: 'filterType-classname'
              })
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
            <label>
                <span className="import-span">Import</span>
                <input id='file' type="file" onChange={onLoad} className="custom-file-input" />
            </label>
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
                            <BootstrapTable striped bordered hover pagination={paginationFactory()} filter={ filterFactory() } {...props.baseProps} />
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