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
export async function getDebtsAll() {
  const { data } = await axios.get('debts');
  return data.data.list;
}
export async function addDebts(item) {
  return await axios.post('debts', item);
}
export async function deleteItmDebt(id) {
  return await axios.delete(`debts/${id}`);
}
export async function getDebtById(id) {
  const { data } = await axios.get(`debts/${id}`);
  return data.data.itm[0];
}
