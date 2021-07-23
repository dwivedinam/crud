/* eslint-disable no-unused-vars */
import React ,{useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import { useContext,useState } from "react";
import { EmployeeContext } from "../context/Empcontext";
import EditEmp from './EditEmp'

export default function Employee({ emp }) {

  const {deleteEmployee} = useContext(EmployeeContext);
  console.log("deleteEmployee " , deleteEmployee)
  const [show,  setShow] = useState(false);
   const handleShow = ()=>{
    setShow(true)
   }

   const handleClose = ()=>{
    setShow(false)
   }

   useEffect(() =>{
    handleClose()
   }, [emp])
 
  return (
    <>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.address}</td>
      <td>{emp.phone}</td>
      <td>
      <button  onClick ={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
      <button onClick={() => deleteEmployee(emp.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit EMployee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <EditEmp  theEmployee ={emp}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick= {handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
