import axios from 'axios';

axios.defaults.baseURL = 'https://calc-cash-server.herokuapp.com/';

export async function getCash() {
  const { data } = await axios.get('');
  return data;
}
export async function addCash(item) {
  return await axios.post('', item);
}
