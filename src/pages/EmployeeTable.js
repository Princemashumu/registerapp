import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
// import { Table, Button, Modal, Form } from 'react-bootstrap';
// import './Table.css';

const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div className="table-container">
      <h2>Active Employees</h2>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td data-label="ID">{employee.id}</td>
              <td data-label="First Name">{employee.firstName}</td>
              <td data-label="Last Name">{employee.lastName}</td>
              <td data-label="Email">{employee.email}</td>
              <td data-label="Position">{employee.position}</td>
              <td data-label="Picture">
                <img typeof='file' alt={""} width="50" />
              </td>
              <td data-label="Actions">
                <div className="btn-group">
                  <Button variant="warning" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>

                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
        
      </Table>
    </div>
  );
};

export default EmployeeTable;
