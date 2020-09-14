import axios from "axios";

// My codesandbox server run it first
const baseUrl = "https://wfn5s.sse.codesandbox.io";

export const getPersons = () => axios.get(`${baseUrl}/persons`);

export const addPerson = (person) => axios.post(`${baseUrl}/persons`, person);
