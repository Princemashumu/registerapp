import React from 'react';
import { Table } from 'react-bootstrap';
// import './Table.css';

const DeletedEmployeeTable = ({ deletedEmployees }) => {
  return (
    <div className="table-container mt-5">
      <h2>Deleted Employees</h2>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {deletedEmployees.map((employee, index) => (
            <tr key={employee.id}>
              <td data-label="ID">{employee.id}</td>
              <td data-label="First Name">{employee.firstName}</td>
              <td data-label="Last Name">{employee.lastName}</td>
              <td data-label="Email">{employee.email}</td>
              <td data-label="Position">{employee.position}</td>
              <td data-label="Picture">
                <img src={employee.picture} alt={employee.firstName} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DeletedEmployeeTable;
