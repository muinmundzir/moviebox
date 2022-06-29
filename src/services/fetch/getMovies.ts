import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

export const getTrending = async () => {
  const url = `trending/all/week?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)
  const { results } = axiosResponse
  
  return results
}
