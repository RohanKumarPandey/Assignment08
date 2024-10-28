import React, { useEffect } from 'react';
import StudentList from '../components/StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents, deleteStudent } from '../redux/studentSlice';
import data from '../../../data/data.json';

const StudentListPage = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  useEffect(() => {
    dispatch(setStudents(data));
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default StudentListPage;
