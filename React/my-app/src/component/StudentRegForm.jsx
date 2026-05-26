import React, { useState } from 'react'

function StudentRegForm() {
    const [data, setData] = useState({ name: '', tel: '', email: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name === "" || data.tel === "" || data.email === "") {
            alert("FILL ALL DATA");
        } else {
            alert(`Data Submitted by ${data.name}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter Name" /><br />
            <input type="tel" name="tel" value={data.tel} onChange={handleChange} placeholder="Enter Mobile Number" /><br />
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Email" /><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default StudentRegForm
