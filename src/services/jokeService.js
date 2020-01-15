import axios from 'axios'
const baseUrl = 'http://api.icndb.com/jokes/random'

const getRandom = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getRandom }