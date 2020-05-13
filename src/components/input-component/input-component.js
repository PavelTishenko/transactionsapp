import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { lData, onEdit, onCloseModal, idToEdit, changeStatus } from '../../redux/actions';
import ToolkitProvider, { CSVExport, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import './input-component.css';
import  ModalWindow  from '../modal-window';

const Input = ({ data, onEditClicked, edit, idEdit, products }) => {
    const { ToggleList } = ColumnToggle;
    const { ExportCSVButton } = CSVExport;
    const dispatch = useDispatch();
    const onLoad = (data, fileInfo) => {
        // first dispatch when data load
        dispatch(lData());
    };
    
    useEffect(() => {
        
    });

   const onChangeStatus = () => {
      console.log(products);
      dispatch(changeStatus('Completed'));
        
   }
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(rowIndex);
            dispatch(idToEdit(rowIndex));
               
        }
    };

    const onEd = () => {
        dispatch(onEdit());
    };

    // react-table btn element
    const rankFormatter = () => {
        return(
            <div>
                <button className="btn btn-primary" onClick={onEd}>Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    };
    // select options for Status column
    const selectOptions = {
        0: 'good',
        1: 'Bad',
        2: 'unknown'
    };
    // select options for type column
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
            <ModalWindow onEditClicked={onEditClicked} onChangeStatus={onChangeStatus} />
            <label>
                <span className="import-span">Import</span>
                <input id='file' type="file" onChange={onLoad} className="custom-file-input" />
            </label>
            <ToolkitProvider
                keyField="id"
                data={products}
                columns={columns}
                rowEvents={ rowEvents }
                exportCSV
            >
                {
                    props => (
                        <div>
                            <MyExportCSV  {...props.csvProps}>Export</MyExportCSV>
                            <hr />
                            <BootstrapTable striped bordered hover 
                                pagination={paginationFactory()} 
                                filter={ filterFactory() } 
                                {...props.baseProps} 
                                rowEvents={ rowEvents }/>
                        </div>
                    )
                }
            </ToolkitProvider>
        </div >
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