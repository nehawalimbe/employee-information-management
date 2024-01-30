function TableHeader({columns}) {
  return (
    <tr>
      {columns.map(column => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  );
  // return (<tr>
  //       <th>
  //         Name
  //       </th>
  //       <th>
  //         DOB
  //       </th>
  //       <th>
  //         DOJ
  //       </th>
  //   </tr>);
}
  
export default TableHeader;