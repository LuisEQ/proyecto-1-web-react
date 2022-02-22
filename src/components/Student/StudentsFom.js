import React, { useState } from "react"

const StudentForm = (props) => {
    const [enteredName, setName] = useState("");
    const [enteredAge, setAge] = useState("");
    const [enteredMajor, setMajor] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const ageHandler = (event) => {
        setAge(event.target.value);
    };

    const majorHandler = (event) => {
        setMajor(event.target.value);
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
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Nombre estudiante</label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <label>Edad</label>
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
                    <label>Carrera</label>
                    <input
                        type="text"
                        value={enteredMajor}
                        onChange={majorHandler}
                    />
                </div>
            </div>
            <div>
                <button type="submit">Nuevo estudiante</button>
            </div>
        </form>
    );
};

export default StudentForm;
