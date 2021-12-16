import axios from "axios";

const BACKEND_URL = "http://localhost:3001/user";

export async function getUserById(id) {
  return await axios.get(BACKEND_URL + '/id/' + id);
}

export async function getUsers() {
  return await axios.get(BACKEND_URL);
}

export async function getUsersByDay(day) {
  return await axios.get(`${BACKEND_URL}/day/${day}`);
}

export async function getUsersByDays(days) {
  return await axios.get(`${BACKEND_URL}/days/${days}`);
}