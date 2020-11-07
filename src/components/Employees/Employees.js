import React from "react";

import "../Employees/style.css"

 function Employees ({ name, image, dept, email }) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <img className="img-div" src={image} alt="employee"/>
                </div>
                <div class="col-md-3 emply-div text-right">
                    <p>{name} </p>
                </div>
                <div class="col-md-3 emply-div text-center">
                    <p>{dept}</p>
                </div>
                <div class="col-md-4 emply-div text-center">
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Employees;