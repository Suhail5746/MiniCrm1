import axios from "axios";

const API_URL = "http://localhost:5001/api/contacts";

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createContact = async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const updateContact = async (id, contact) => {
  const response = await axios.put(`${API_URL}/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
