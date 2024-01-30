function TableRow({employees}) {
  {employees.map(employee => {
    console.log('employee', employee)
	    return (<tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.dob}</td>
          <td>{employee.doj}</td>
        </tr>
      );
    })}  
}

// function TableRow() {
// 	return (<tr>
//         <td>
//           1
//         </td>
//         <td>
//           George Brook
//         </td>
//         <td>
//           1985-04-12
//         </td>
//         <td>
//           2020-01-06
//         </td>
//     </tr>);
// }
  
export default TableRow;