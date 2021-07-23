/* eslint-disable no-unused-vars */
import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from '../context/Empcontext'
import { useContext ,useState} from "react"

const EditEmp = ({theEmployee}) =>{
    const {updateEmployee} = useContext(EmployeeContext);
    console.log("addEmployee" , updateEmployee)
    const id =theEmployee.id;
    const [name, setName] = useState(
        theEmployee.name
    );
    const [email, setEmail] = useState(
        theEmployee.email
    );
    const [phone, setPhone] = useState(
        theEmployee.phone
    );
    const [address, setAddress] = useState(
        theEmployee.address
    );

    const updatedEmployee = { id,name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address" 
                    name="address"
                    onChange={(e)=> setAddress(e.target.value)}
                    value={address}
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                  
                />
            </Form.Group>
            <Button  variant="success" type="submit" block>
               Edit Employee
            </Button>
        </Form>

     )
}

export default EditEmp; 
