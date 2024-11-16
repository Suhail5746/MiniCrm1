import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ onSave, selectedContact }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    } else {
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: ""
      });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(contact);
    navigate("/");
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h5" align="center" gutterBottom>
        {selectedContact ? "Edit Contact" : "Add New Contact"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="First Name" name="firstName" value={contact.firstName} onChange={handleChange} required />
          <TextField label="Last Name" name="lastName" value={contact.lastName} onChange={handleChange} required />
          <TextField label="Email" name="email" value={contact.email} onChange={handleChange} required />
          <TextField label="Phone Number" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} required />
          <TextField label="Company" name="company" value={contact.company} onChange={handleChange} />
          <TextField label="Job Title" name="jobTitle" value={contact.jobTitle} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {selectedContact ? "Update Contact" : "Save Contact"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate("/")} sx={{ mt: 1 }}>
            Back to Contacts
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ContactForm;
