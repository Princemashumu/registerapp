import React from 'react';
import Table from './Table.css';


const DeletedEmployeeTable = ({ deletedEmployees }) => {
  return (
    <div className="table-responsive">
      <h2>Deleted Employees</h2>
      <table className="table table-striped table-bordered">
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
            employee && (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td>
                  <img src={employee.Picture} alt=" " width="50" />
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeletedEmployeeTable;
