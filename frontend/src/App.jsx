import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm.jsx";
import ContactsTable from "./components/ContactTable.jsx";
import { getContacts, createContact, updateContact, deleteContact } from "./services/ContactService.jsx";
import { Container, Typography, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleSaveContact = async (contact) => {
    if (selectedContact) {
      await updateContact(selectedContact._id, contact);
      setSelectedContact(null);
    } else {
      await createContact(contact);
    }
    loadContacts();
  };

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    loadContacts();
  };

  return (
    <Router>
      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Contact Management
          </Typography>
        </Box>
        <Routes>
          <Route
            path="/"
            element={
              <ContactsTable
                contacts={contacts}
                onEdit={handleEditContact}
                onDelete={handleDeleteContact}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactForm
                onSave={handleSaveContact}
                selectedContact={selectedContact}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
