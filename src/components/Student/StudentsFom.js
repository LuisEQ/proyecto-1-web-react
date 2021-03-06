import React, { useState } from "react"

import "./studentForm.css";

const StudentForm = (props) => {
    const [enteredName, setName] = useState("");
    const [enteredAge, setAge] = useState("");
    const [enteredMajor, setMajor] = useState("");
    const [enteredPhoto, setPhoto] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const ageHandler = (event) => {
        setAge(event.target.value);
    };

    const majorHandler = (event) => {
        setMajor(event.target.value);
    };
    const photoHandler = (event) => {
        setPhoto(event.target.file);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const studentInfo = {
            name: enteredName,
            age: enteredAge,
            major: enteredMajor,
        };

        props.onSaveStudentInfo(studentInfo);
        setName("");
        setAge("");
        setMajor("");
    };

    return (
        <form onSubmit={submitHandler} className="StudentsForm">
            <div className="StudentsInfo">
                <div>
                    <label className="title">Agregar nuevos estudiantes</label>
                </div>
                <div>
                    <label className="font-form">Nombre estudiante</label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <label className="font-form">Edad</label>
                    <input
                        type="number"
                        min="1"
                        max="99"
                        step="1"
                        value={enteredAge}
                        onChange={ageHandler}
                    />
                </div>
                <div>
                    <label className="font-form">Carrera</label>
                    <input
                        type="text"
                        value={enteredMajor}
                        onChange={majorHandler}
                    />
                </div>
                <div>
                    <label className="font-form">Imagen de perfil</label>
                    <input
                        type="file"
                        value={enteredPhoto}
                        onChange={photoHandler}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="buttonNewStudent">Nuevo estudiante</button>
            </div>
        </form>
    );
};

export default StudentForm;
