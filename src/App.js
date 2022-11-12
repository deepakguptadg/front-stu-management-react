import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Components/Page/Index';
import Dashboard from './Components/Page/Dashboard';
import Contact from './Components/Page/Contact';
import { useEffect } from 'react';
import Auth from './Auth';
import InstituteList from './Components/Page/Institute/InstituteList';
import AddInstitute from './Components/Page/Institute/AddInstitute';
import StudentList from './Components/Page/Student/StudentList';
import StudentDetails from './Components/Page/Student/StudentDetails';
import InstituteDetails from './Components/Page/Institute/InstituteDetails';
import PageNotFound from './Components/Page/PageNotFound';

function App() {
  // useEffect(() => {
  //   axios.post('https://crusherimages.arustupvt.com', formdata)
  //     .then(response => {
  //       console.log(response.data)
  //       setImgUrl(response.data.data)
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, [])
  const [type, setType] = useState('')
  const getvalue = (val) => {
    setType(val);
  }
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Auth cmp={Index} getvalue={getvalue} paths='/' />} />
        <Route exact path="/dashboard" element={<Auth cmp={Dashboard} paths='/dashboard' />} />
        <Route exact path="/institute-list" element={<Auth cmp={InstituteList} paths='/institute-list' />} />
        <Route exact path="/add-institute" element={<Auth cmp={AddInstitute} paths='/add-institute' />} />
        <Route exact path="/institute-details" element={<Auth cmp={InstituteDetails} paths='/institute-details' />} />
        <Route exact path="/student-list" element={<Auth cmp={StudentList} paths='/student-list' />} />
        <Route exact path="/student-details" element={<Auth cmp={StudentDetails} paths='/student-details' />} />
        <Route exact path="/contact" element={<Auth cmp={Contact}  paths='/contact'/>} />
        <Route exact path="*" element={<Auth cmp={PageNotFound} paths='/pageNotFound' />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
