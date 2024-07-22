import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import EmployeeData from '../components/EmployeeData';

const AddEmployeeModal = ({ show, handleClose, handleChange, handleAdd, handleUpdate, isEdit, currentEmployee }) => {
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // setPicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }

  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>{isEdit ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group controlId="formId" className="form-group">
            <Form.Label className="form-label">ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              name="id"
              value={currentEmployee.id}
              onChange={handleChange}
              disabled={isEdit}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formFirstName" className="form-group">
            <Form.Label className="form-label">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={currentEmployee.firstName}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formLastName" className="form-group">
            <Form.Label className="form-label">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={currentEmployee.lastName}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={currentEmployee.email}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formPosition" className="form-group">
            <Form.Label className="form-label">Job Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Job Position"
              name="position"
              value={currentEmployee.position}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formPicture" className="form-group">
            <Form.Label className="form-label">Picture URL</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter Picture URL"
              name="picture"
              value={currentEmployee.file}
              onChange={handleFileChange}
              className="form-control"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {isEdit ? (
          <Button variant="primary" onClick={handleUpdate}>
            Update Employee
          </Button>
        ) : (
          <Button variant="primary" onClick={handleAdd}>
            Add Employee
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default AddEmployeeModal;
