// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import EmployeeTable from './components/EmployeeTable';
import { useState } from 'react';

function App() {
  
  const [columns, setColumns] = useState([]);
  const [employees, setEmployees] = useState([]);
  const fetchColumns = async () => {
    let response = await fetch('http://localhost:5000/columns');
    let data = await response.json();
    return data;
  }

  const fetchEmployees = async () => {
    let response = await fetch('http://localhost:5000/employees');
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    const getAllData  = async () => {
      let columnsData = await fetchColumns();
      setColumns(columnsData);
      let employeeData = await fetchEmployees();
      setEmployees(employeeData);
      console.log("Employee Data", employeeData);
    }
    getAllData();
  }, []);

  return (
    <div>
      <EmployeeTable columns={columns} employees={employees}/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
