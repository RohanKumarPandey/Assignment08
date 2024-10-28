import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const students = useSelector((state) => state.students.students);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Students: {students.length}</p>
    </div>
  );
};

export default Dashboard;
