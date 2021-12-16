import axios from "axios";

const BACKEND_URL = "http://localhost:3001/messages";

export async function getMessagesToday() {
  return await axios.get(BACKEND_URL);
}

export async function getMessagesByDay(day) {
  return await axios.get(BACKEND_URL + '/' + day);
}

export async function getMessagesByDayAndMonth(day, month) {
  return await axios.get(`${BACKEND_URL}/${day}/${month}`);
}

export async function getMessagesByDate(day, month, year) {
  return await axios.get(`${BACKEND_URL}/${day}/${month}/${year}`);
}

export async function getMessagesThisWeek() {
  return await axios.get(`${BACKEND_URL}/week`);
}