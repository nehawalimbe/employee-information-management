import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function EmployeeTable({columns, employees}) {
	return (<div id="app">
        <div className="header">Employee Information</div>
        <table>
            <TableHeader columns={columns}></TableHeader>
            <TableRow employees={employees}></TableRow>
        </table>
    </div>);
}
  
export default EmployeeTable;