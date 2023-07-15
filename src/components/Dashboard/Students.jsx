import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Students = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("/studentData.json")
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);
  return (
    <TableContainer>
        <caption style={{width: "200px"}}>New Enrollments</caption>
      <Table  aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell>STUDENT NAME</TableCell>
            <TableCell >COURSE NAME</TableCell>
            <TableCell >DATE</TableCell>
            <TableCell>TIME</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row) => (
            <TableRow
              key={row.id}
            >
              
              <TableCell >{row.studentName}</TableCell>
              <TableCell >{row.courseName}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Students;
