import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function EmployeeTable({columns, employees}) {
	return (<div id="app">
        <div className="header">Employee Information</div>
        <table>
            <thead>
                <TableHeader columns={columns}></TableHeader>
            </thead>
            <tbody>
                <TableRow employees={employees}></TableRow>
            </tbody>
        </table>
    </div>);
}
  
export default EmployeeTable;