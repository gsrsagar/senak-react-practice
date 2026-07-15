import axios from "axios";
import { use, useEffect, useRef, useState } from "react";




const styles = {
    margin: '1rem',
    padding: '1rem',
    border: '2px solid gray'
};

export function ControlledForm() {
    // doing determigning changes using states/ hooks

    const [userForm, setUserForm] = useState({
        username: '',
        age: '',
        role: '',
        emailid: ''
    });

    const username= useRef(null);
    const age = useRef(null);
    const role = useRef(null);
    const emailid = useRef(null);

    const [isEditId, setIsEditId] = useState(0);

    const [users, setUsers] = useState([]);


    useEffect(() => {
        getAllusers();
    }, [])

    const handleSubmit = (e) => {
        const usernmae= username.current.value;
        e.preventDefault();
        if (isEditId > 0) {
            updateUser();
        } else {
            console.log(userForm);
            const valdiateResult = validateForm();
            if (!valdiateResult.isvalid) {
                alert(valdiateResult.message)
            } else {
                registerUser(userForm);
            }
        }
    }

    const updateUser = async () => {
        const body = {
            ...userForm,
            age: parseInt(userForm.age)
        };
        //const result = await axios.put(`http://localhost:5000/api/users/${isEditId}`, body);
        // if (result.status == "200") {
        //     alert("success");
        //     alert("data", JSON.stringify(result.data));
        //     getAllusers();
        //     clearForm();
        //     setIsEditId(0);
        // }
    }

    const registerUser = async (userForm) => {
        const body = {
            ...userForm,
            age: parseInt(userForm.age)
        };

        const result = await axios.post("http://localhost:5000/api/users", body);
        if (result.status == "201") {
            alert("success");
            alert("data", JSON.stringify(result.data));
            getAllusers();
        }
    }


    const clearForm = () => {
        setUserForm({
            username: '',
            age: '',
            role: '',
            emailid: ''
        })
    }

    //URL - POST http://localhost:5000/api/user

    const validateForm = () => {
        const { username, age, role, emailid } = userForm;

        if (!(username.trim() != null && username.length >= 8)) {
            return { isvalid: false, message: "invalid username" };
        }

        if (!(age != null && age > 0)) {
            return { isvalid: false, message: "invalid age" };
        }

        if (!(role.trim() != null && role.length >= 2)) {
            return { isvalid: false, message: "invalid role" };
        }

        if (!(emailid.trim() != null && emailid.length >= 8)) {
            return { isvalid: false, message: "invalid emailid" };
        }

        return { isvalid: true, message: "Form Vallid" };
    }


    const handleChange = (e) => {
        const { name, value } = e.target ?? {};
        setUserForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const getAllusers = async () => {
        const result = await axios.get("http://localhost:5000/api/users");
        if (result.data?.length > 0 && result.status == '200') {
            setUsers(result.data);
            alert("Load users Success")
        }
    }

    const handleDelete = async (id) => {
        const result = await axios.delete(`http://localhost:5000/api/users/${id}`);
        if (result.data != null && result.status == '200') {
            getAllusers();
            alert(`Deleted user with id ${id} Success`)
        }
    }


    const handleUpdate = (user) => {
        console.log(user);
        const userForm = {
            ...user,
            emailid:user?.emailid ?? user?.email
        };
        setUserForm(userForm);
        setIsEditId(user.id);
    }
    return (
        <>
            <div style={styles}>
                <h1>Form User Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">UserName</label><br />
                    <input onChange={handleChange} type="text" ref={username} defaultValue={username?.current?.value ?? ''} name="username"
                        id="userName" placeholder="enter user name"
                    /><br />

                    <label htmlFor="userAge">Age</label><br />
                    <input onChange={handleChange} type="number" value={userForm.age} name="age"
                        id="userAge" placeholder="enter age"
                    /><br />

                    <label htmlFor="userEmail">Email</label><br />
                    <input onChange={handleChange} type="email" value={userForm.email} name="emailid"
                        id="userEmail" placeholder="enter email"
                    /><br />

                    <label htmlFor="userRole">Role</label><br />
                    <select onChange={handleChange} name="role" id="userRole" value={userForm.role}>
                        <option value={'USER'}>USER</option>
                        <option value={'HR'}>HR</option>
                        <option value={'MANAGER'}>MANAGER</option>
                        <option value={'ADMIN'} >ADMIN</option>
                    </select><br />
                    <button type="submit">Register</button>

                </form>
                <div>
                    <p>Users</p>
                    {
                        users && (<table border="1px">
                            <thead>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td >{user?.username ?? user?.fullName}</td>
                                            <td>{user.age ?? 0}</td>
                                            <td >{user?.emailid ?? user?.email ?? ''}</td>
                                            <td >{user.role}</td>
                                            <td><button onClick={() => handleDelete(user.id)}>Delete</button>
                                                <button onClick={() => handleUpdate(user)}>Update</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>)
                    }

                </div>
            </div>
            <div>

            </div>

        </>


    )
}