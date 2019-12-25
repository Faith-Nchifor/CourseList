import React from 'react';


import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';

/*import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
*/

function App() {
  return (
    <div>
      <Navbar/>
      <CourseList />
    </div>
   
  );
}

export default App;
