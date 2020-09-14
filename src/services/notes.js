import axios from "axios";

// My codesandbox server run it first
const baseUrl = "https://wfn5s.sse.codesandbox.io";

export const getNotes = () => axios.get(`${baseUrl}/notes`);

export const createNote = (note) => axios.post(`${baseUrl}/notes`, note);
