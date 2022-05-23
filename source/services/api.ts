import axios from 'axios'

export const url = 'https://rxnav.nlm.nih.gov/REST/'

const api = axios.create({
  baseURL: url,
})

export default api
