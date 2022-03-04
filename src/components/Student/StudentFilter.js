import React from "react";
import "./studentFilter.css";
const StudentFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div>
            <div>
                <label className="labelMajorFilter">Filtrar por carrera</label>
                <select value={props.selected} onChange={dropdownChangeHandler} className="buttonMajor">
                    <option value="Engineer">Ingeniería</option>
                    <option value="Medicina">Medicina</option>
                    <option value="Programacion">Programación</option>
                    <option value="Psicologia">Psicología</option>
                </select>
            </div>
        </div>
    );
};

export default StudentFilter;
