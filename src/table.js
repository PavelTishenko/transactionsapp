import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import { connect } from 'react-redux';
import { dataLOADED, lData, LOADED } from './redux/actions';

const Table = ({ data }) => {
    // vizualization all rows from data
    const renderData = data.map((elt) => {
        const row = elt.split(',');
        const id = row[0];
        const status = row[1];
        const type = row[2];
        const clientName = row[3];
        const amount = row[4];
        console.log(id, status, type, clientName, amount);
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{status}</td>
                <td>{type}</td>
                <td>{clientName}</td>
                <td>{amount}</td>
                <td>
                    <button onClick={
                        () => { }
                    }>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Client name</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderData}
            </tbody>
        </ReactBootstrap.Table>
    )
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(Table);