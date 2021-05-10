import axios from 'axios';

axios.defaults.baseURL = 'https://calc-cash-server.herokuapp.com/';

export async function getCash() {
  const { data } = await axios.get('');
  return data.data.list;
}
export async function addCash(item) {
  return await axios.post('', item);
}
export async function getSeting() {
  const { data } = await axios.get('seting');
  return data.data.list[0];
}
export async function addSeting(body) {
  return await axios.post('seting', body);
}
