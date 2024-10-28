// components/StudentForm.js
import React, { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const command = `custom-db create --name="${formData.name}" --class="${formData.class}" --email="${formData.email}"`;
      
        fetch('http://localhost:1269/run-command', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ command }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Form Data Submitted:', data);
            alert('Record created successfully!');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div>
                <label>class:</label>
                <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default StudentForm;
