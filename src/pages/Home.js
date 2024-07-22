import React, { useState, useEffect } from 'react';
import Homestyle from './HomeStyle.css'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import EmployeeTable from './EmployeeTable';
import DeletedEmployeeTable from './DeletedEmployeeTable';
import AddEmployeeModal from './AddEmployeeModal';
// import Table from './Table.css';

const Home =() => {
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    picture: ''
  });
  const [isEdit, setIsEdit] = useState(false);
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
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const handleAdd = () => {
    const newEmployees = [...employees, currentEmployee];
    setEmployees(newEmployees);
    saveToLocalStorage('employees', newEmployees);
    handleClose();
    setCurrentEmployee({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      picture: ''
    });
  };

  const handleEdit = (index) => {
    setCurrentEmployee(employees[index]);
    setIsEdit(true);
    handleShow();
  };

  const handleUpdate = () => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === currentEmployee.id ? currentEmployee : employee
    );
    setEmployees(updatedEmployees);
    saveToLocalStorage('employees', updatedEmployees);
    setIsEdit(false);
    handleClose();
    setCurrentEmployee({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      picture: ''
    });
  };

  const handleDelete = (index) => {
    const deletedEmployee = employees[index];
    const updatedEmployees = employees.filter((_, empIndex) => empIndex !== index);
    setEmployees(updatedEmployees);
    const newDeletedEmployees = [...deletedEmployees, deletedEmployee];
    setDeletedEmployees(newDeletedEmployees);
    saveToLocalStorage('employees', updatedEmployees);
    saveToLocalStorage('deletedEmployees', newDeletedEmployees);
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const result = employees.find(emp => emp.id === searchQuery);
    setSearchResult(result);
  };
  const filteredEmployees = employees.filter(employee =>
    employee.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <div className="HomeNavBar">
    <div clasname="CompanyName">
      <h1>ERStaff</h1>
    </div>
        
        <div className="Button2">
          <a href='Login'>
          <button>LOG OUT</button>
          </a>
        

        </div>
        
        <div className="CompanyLogo"><img src="Applogo.png"></img></div>
  </div>
    <div className="Wrapper">
    <div className="Header">
      <h2>WELCOME.</h2>
      <p>Design and Manage employees effeciently. </p>
    </div>
    <div className="MainChild">
      <div className="TopBar">
      <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Employee ID"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mt-3 mb-3"
        />
      </div>
      </div>
      </div>
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
      </div> */}
      <EmployeeTable employees={filteredEmployees} handleEdit={handleEdit} handleDelete={handleDelete} />
      {/* <DeletedEmployeeTable deletedEmployees={deletedEmployees} /> */}
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








      <div className="container">
      
     
      {/* <EmployeeTable employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
      {/* <DeletedEmployeeTable deletedEmployees={deletedEmployees} /> */}
      <Button variant="primary" onClick={handleShow} className="mt-5">
        Add Employee
      </Button>
      <Button href="/EmployeeData">View Former Employees?</Button>
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

export default Home

