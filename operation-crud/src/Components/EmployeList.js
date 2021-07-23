/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, Button ,Alert} from "react-bootstrap";
import Employee from "./Employee";
import { useContext,useEffect } from "react";
import { EmployeeContext } from "../context/Empcontext";
import AddForm from './AddForm';
import Pagination from './Pagination';
 
function EmployeList() {
  const { employees } = useContext(EmployeeContext);
  console.log("employees", employees);
  const [show,  setShow] = useState(false);
  const[showAlert, setShowAlert] = useState(false);

  const handleShowAlert =()=>{
    setShowAlert(true);
    setTimeout(() =>{
    setShowAlert(false);
    },2000)
  }
   const handleShow = ()=>{
    setShow(true)
   }
   const handleClose = ()=>{
    setShow(false)
   }

   useEffect(() =>{
    handleClose()
    return handleShowAlert()
   }, [employees])
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button 
             onClick ={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} dismissible onClose={()=> setShowAlert(false)}variant="success">
        Emlployee List Updated Succefully!
        </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <Employee emp={emp} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add EMployee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick= {handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmployeList;
