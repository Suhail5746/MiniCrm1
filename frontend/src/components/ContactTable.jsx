import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("firstName");
  const navigate = useNavigate();

  // Handle the sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Sort comparator function
  const comparator = (a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  };

  const sortedContacts = contacts.sort(comparator);

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle editing contact and navigate to the edit form
  const handleEditClick = (contact) => {
    onEdit(contact);
    navigate("/contact");
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/contact")}
        sx={{ marginBottom: 2 }}
      >
        Add New Contact
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["firstName", "lastName", "email", "phoneNumber", "company", "jobTitle"].map((header) => (
                <TableCell key={header}>
                  <TableSortLabel
                    active={orderBy === header}
                    direction={orderBy === header ? order : "asc"}
                    onClick={() => handleRequestSort(header)}
                    sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'primary.main' }}
                  >
                    {header.charAt(0).toUpperCase() + header.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'primary.main' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
              <TableRow key={contact._id} hover>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phoneNumber}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(contact)}
                    sx={{ margin: 1, borderRadius: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onDelete(contact._id)}
                    sx={{ borderRadius: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContactsTable;
