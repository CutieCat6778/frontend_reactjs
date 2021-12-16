import axios from "axios";

const BACKEND_URL = "https://backend-nestjs.vercel.app/update";

export async function getUpdatesToday() {
  return await axios.get(BACKEND_URL);
}

export async function getUpdatesByDay(day) {
  return await axios.get(BACKEND_URL + '/' + day);
}

export async function getUpdatesByDayAndMonth(day, month) {
  return await axios.get(`${BACKEND_URL}/${day}/${month}`);
}

export async function getUpdatesByDate(day, month, year) {
  return await axios.get(`${BACKEND_URL}/${day}/${month}/${year}`);
}

export async function getUpdatesThisWeek() {
  return await axios.get(`${BACKEND_URL}/week`);
}