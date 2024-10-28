import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import StudentListPage from './pages/StudentListPage';
import RegisterStudentPage from './pages/RegisterStudentPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/register" element={<RegisterStudentPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
