import React from "react";
import Employees from "../Employees/Employees";



function EmployeeTable ({ data }) { 
    return (
        data.map(employee => (
            <Employees
                key={employee.id}
                image={employee.image}
                name={employee.name}
                dept={employee.department}
                email={employee.email}
                phone={employee.phone}
            />
            ))
    )
}

export default EmployeeTable;