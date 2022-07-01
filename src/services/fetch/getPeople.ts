import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchCasts = async () => {
  const url = `person/popular?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)
  const results = []
  const spliceResponse = axiosResponse.results.splice(0, 6)
  for(const response of spliceResponse) {
    const cast = {
      name: response.name,
      profilePath :response.profile_path
    }
    results.push(cast)
  }
  return results
}