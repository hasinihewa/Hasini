import axios from 'axios';
import {useEffect, useState } from "react";
function Teacher() {
  // Function logic goes here
  const [teacherid, setId] = useState('');
  const [teacherName, setName] = useState("");
  const [teacherAddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{
    (async () => await load())();

  },[]);
  
    async function load() {
        const result = await axios.get("http://localhost:8080/api/v1/teacher/getAll");
        setTeachers(result.data);
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/teacher/save", {
                teacherName: teacherName,
                teacherAddress: teacherAddress,
                mobile: mobile
            });
            alert("Teacher Registration Successful");
            setId("");
            setName("");
            setAddress("");
            setMobile("");
            load();
        } catch (err) {
            alert("Teacher Registration Failed");
        }
    }

    async function editTeacher(teacher) {
        setName(teacher.teacherName);
        setAddress(teacher.teacherAddress);
        setMobile(teacher.mobile);
        setId(teacher._id);
    }

    async function deleteTeacher(teacherid) {
        await axios.delete("http://localhost:8080/api/v1/teacher/delete/" + teacherid);
        alert("Teacher deleted Successfully");
        load();
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/api/v1/teacher/edit/" + teacherid, {
                teacherName: teacherName,
                teacherAddress: teacherAddress,
                mobile: mobile
            });
            alert("Registration Updated");
            setId("");
            setName("");
            setAddress("");
            setMobile("");
            load();
        } catch (err) {
            alert("Teacher Update Failed");
        }
    }

    return (
        <div>
            <h1>Teacher Details</h1>
            <div class="container mt-4">
                <form>
                    <div class="form-group">
                        <label>Teacher Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="teacherName"
                            value={teacherName}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Teacher Address</label>
                        <input
                            type="text"
                            class="form-control"
                            id="teacherAddress"
                            value={teacherAddress}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <input
                            type="text"
                            class="form-control"
                            id="mobile"
                            value={mobile}
                            onChange={(event) => {
                                setMobile(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button class="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button>
                        <button class="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Teacher Address</th>
                        <th scope="col">Teacher Mobile</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {teachers.map(function fn(teacher) {
                    return (
                        <tbody>
                            <tr>
                                <td>{teacher.teacherName}</td>
                                <td>{teacher.teacherAddress}</td>
                                <td>{teacher.mobile}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => editTeacher(teacher)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => deleteTeacher(teacher._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );


  }



export default Teacher;