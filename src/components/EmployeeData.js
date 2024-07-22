import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import EmployeeTable from '../pages/EmployeeTable';
import DeletedEmployeeTable from '../pages/DeletedEmployeeTable';
import AddEmployeeModal from '../pages/AddEmployeeModal';
import EmployeeDataStyle from './EmployeeDataStyle.css';



const EmployeeData =() => {
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    picture: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedDeletedEmployees = JSON.parse(localStorage.getItem('deletedEmployees')) || [];
    setEmployees(storedEmployees);
    setDeletedEmployees(storedDeletedEmployees);
  }, []);

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    setEmployees((prev) => {
      const updatedEmployees = [...prev, currentEmployee];
      saveToLocalStorage('employees', updatedEmployees);
      return updatedEmployees;
    });
    handleClose();
  };

  const handleUpdate = () => {
    setEmployees((prev) => {
      const updatedEmployees = prev.map(emp =>
        emp.id === currentEmployee.id ? currentEmployee : emp
      );
      saveToLocalStorage('employees', updatedEmployees);
      return updatedEmployees;
    });
    handleClose();
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setIsEdit(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setEmployees((prev) => {
      const updatedEmployees = prev.filter(emp => emp.id !== id);
      saveToLocalStorage('employees', updatedEmployees);
      return updatedEmployees;
    });
    setDeletedEmployees((prev) => {
      const employeeToDelete = employees.find(emp => emp.id === id);
      const updatedDeletedEmployees = [...prev, employeeToDelete];
      saveToLocalStorage('deletedEmployees', updatedDeletedEmployees);
      return updatedDeletedEmployees;
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <>
      <div className="EmployeeDataNavBar">
      <div clasname="CompanyName">
        <h1>ERStaff</h1>
      </div>
          <div className="Button2">
            <a href='Login'>
            <button>LOG OUT</button>
            </a>
          
  
          </div>
          <a href="/Home">
          <div className="CompanyLogo"><img src="Applogo.png"></img></div>
          </a>
    </div>
      <div className="Wrapper">
      <div className="Header">
        <h2>WELCOME.</h2>
        <p>Design and Manage employees effeciently. </p>
      </div>
      <div className="MainChild">
        <div className="TopBar"></div>
        <div className="MiddleBar">
        <div className="container">
      {/* <div className="search-container">
        <input
          type="text"
          placeholder="Search by Employee ID"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mt-3 mb-3"
        />
      </div>
      <EmployeeTable employees={filteredEmployees} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
      
      <DeletedEmployeeTable deletedEmployees={deletedEmployees} />
      <AddEmployeeModal
        show={show}
        handleClose={handleClose}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        isEdit={isEdit}
        currentEmployee={currentEmployee}
      />
    </div>
    </div>
            </div>
        </div>
  
  
    </>
    
    );
  }
  
  export default EmployeeData