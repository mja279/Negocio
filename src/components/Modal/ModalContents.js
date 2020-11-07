import React, { useState } from 'react';
import ModalNav from "../Nav/modalNav";
import Table from "../Table/index";
import employees from "../../utils/employees.json"

function ModalContents() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByDept() {
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
            setSorted(false);
        }
    }

    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div custom-cntr>
            <ModalNav
                onSearch={handleSearchTerm}
                searchTerm={searchTerm}
                handleSortByDept={handleSortByDept}
            />
            <Table data={filteredEmployees}/>
        </div>
    )
}

export default ModalContents;