import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

const Events = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/public/eventsData.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
    return (
        <TableContainer>
        <caption style={{width: "200px"}}>Upcoming Events</caption>
      <Table  aria-label="simple table">
        
        <TableBody>
          {events.map((row) => (
            <TableRow
              key={row.id}
            >
              
            
            
              <TableCell >{row.date}</TableCell>
              <TableCell sx={{display: "flex", flexDirection: "column"}}>
                
                <Typography>{row.className}</Typography>
                    <small>{row.time}</small>
                    <small>{row.mentorName}</small>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Events;