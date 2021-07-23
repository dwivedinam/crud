/* eslint-disable no-unused-vars */
import {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployess] = useState([
        {id:uuidv4(), name: 'Thomas Hardy10', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
        {id:uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
        {id:uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
])

const addEmployee= (name, email, phone, address) =>{
setEmployess([...employees ,{id:uuidv4(), name, email, phone}])

}

const deleteEmployee = (id) => {
   var filteredVal = []
    employees.forEach( function(val){
      console.log(val)
      if(val.id !== id){
        filteredVal.push(val)
      }

    } )
    console.log(filteredVal)
    // var filteredEmp = employees.filter(employee => employee.id !== id);
    setEmployess(filteredVal)
}
const updateEmployee = (id, updatedEmployee) => {
    console.log(id, updateEmployee)
    setEmployess(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}
    return (
        <EmployeeContext.Provider value={{employees, addEmployee,deleteEmployee,updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;