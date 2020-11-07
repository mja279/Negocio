import React from "react";

import "./style.css"

function Navigation({ onSearch, searchTerm, handleSortByDept }) { 
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form>
                        <input
                            value={searchTerm} 
                            onChange={onSearch}
                            className="shadow pl-5 rounded w-full py-1"
                            type="text"
                            placeholder="Search by Name"/>
                    </form> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-0">
                Or
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <button 
                        type="button" 
                        id="dept-btn" 
                        className="btn btn-lg active" 
                        role="button" 
                        aria-pressed="true" 
                        onClick={handleSortByDept}>
                    Deptartment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;