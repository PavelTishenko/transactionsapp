import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { lData, onEdit, idToEdit, changeStatus } from '../../redux/actions';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter';
import './input-component.css';
import ModalWindow from '../modal-window';
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'

const Input = ({ data, onEditClicked, edit, idEdit, products }) => {
    const dispatch = useDispatch();
    const onLoad = (data, fileInfo) => {
        // first dispatch when data load
        dispatch(lData());
    };

    const onChangeStatus = () => {
        console.log(products[idEdit].Clientname);
        dispatch(changeStatus('Completed'));

    }

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(row.TransactionId);
            dispatch(idToEdit(row.TransactionId));

        }
    };

    const onEd = () => {
        dispatch(onEdit());
    };

    // react-table btn element
    const rankFormatter = () => {
        return (
            <div>
                <button className="btn btn-primary" onClick={onEd}>Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    };
    // select options for Status column
    const selectOptions = {
        'Completed' : 'Completed',
        'Cancelled' : 'Cancelled',
        'Pending' : 'Pending'
    };
    // select options for type column
    const selectOpt = {
        'Withdrawal': 'Withdrawal',
        'Refill': 'Refill'
    };

    const columns = [
        {
            dataField: 'TransactionId',
            text: 'id',
            sort: true,
            headerAlign: 'center'
        },
        {
            dataField: 'Status',
            text: 'Status',
            
            filter:  selectFilter({ 
                options:selectOptions,
                style: {
                    width:'15px' 
                } 
            }),
            className: 'txt-filter'
        },
        {
            dataField: 'Type',
            text: 'Type',
            sort: true,
            
            filter:  selectFilter({ 
                options: selectOpt,
                style: {
                    width:'15px'
                }  
            }),
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

    // Export BTN        
    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <div>
                <Button className="btn-export" onClick={handleClick}>Export to CSV</Button>
            </div>
        );
    };
    // Import BTN
    const MyImportCSV = () => {
        return (
            <div>
                <input type="file" id="BtnBrowseHidden" name="files" onChange={onLoad} />
                <Button className="btn-export" onClick={loadFile}>Import</Button>
            </div>
        )
    };
    const loadFile = () => {
        document.getElementById('BtnBrowseHidden').click();
    };


    return (
        <Container className="input-container">
            <ModalWindow onEditClicked={onEditClicked} onChangeStatus={onChangeStatus} />

            <ToolkitProvider
                keyField='id'
                data={products}
                columns={columns}
                rowEvents={rowEvents}
                exportCSV
            >
                {
                    props => (
                        <div className="table-holder">
                            <div className="btn-holder">
                                <MyImportCSV></MyImportCSV>
                                <MyExportCSV  {...props.csvProps}>Export</MyExportCSV>
                            </div>
                            <hr />
                            <BootstrapTable striped bordered hover variant="dark"
                                pagination={paginationFactory()}
                                filter={filterFactory()}
                                {...props.baseProps}
                                rowEvents={rowEvents}
                                keyField='id' />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container >
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        onEditClicked: state.onEditClicked,
        edit: state.edit,
        idEdit: state.idEdit,
        products: state.products
    };
};

export default connect(mapStateToProps)(Input);