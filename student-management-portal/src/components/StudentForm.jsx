import React, { useState } from 'react';

const StudentForm = ({ onSubmit, initialData = {}, buttonText }) => {
  const [student, setStudent] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
      <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" required />
      <input type="text" name="class" value={student.class} onChange={handleChange} placeholder="Class" required />
      <input type="text" name="address" value={student.address} onChange={handleChange} placeholder="Address" required />
      <input type="text" name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default StudentForm;
