function TableRow({employees}) {
  return(<tbody>            
    {
      employees.map(employee => 
      <tr key = {employee.id}>
        <td> {employee.id} </td>
        <td> {employee.name} </td>   
        <td> {employee.dob} </td>
        <td> {employee.doj} </td>
      </tr>
      )
    }
  </tbody>); 
}
 
export default TableRow;