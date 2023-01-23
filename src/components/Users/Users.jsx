import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import Header from "../Header/Header";

export default function Users() {
  const [users, setUsers] = React.useState([]);

  const handleEditSector = () => {
    console.log("click");
  };

  React.useEffect(() => {
    fetch("https://backend-olive-two.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      });
  }, []);
  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Working Sector</TableCell>
              <TableCell align="center">terms</TableCell>
              <TableCell align="center">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.sectors}</TableCell>
                <TableCell align="center">
                  {user.terms === "true" ? <span>Yes</span> : <span>No</span>}
                </TableCell>
                <TableCell align="center">
                  <Button
                    sx={{ mx: "auto" }}
                    type="submit"
                    variant="contained"
                    size="small"
                    onClick={handleEditSector}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

//
