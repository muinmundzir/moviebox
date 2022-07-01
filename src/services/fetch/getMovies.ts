import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

export const getTrending = async () => {
  const url = `movie/popular?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)
  const { results } = axiosResponse
  return results
}

export const fetchUpcoming = async () => {
  const url = `movie/upcoming?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)
  const { results } = axiosResponse
  return results
}

export const getDetails = async (id: number) => {
  const url = `movie/${id}?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)

  return axiosResponse
}

export const fetchVideos = async (id: number) => {
  const url = `movie/${id}/videos?api_key=${process.env.REACT_APP_AUTH_KEY}`
  
  const videos = []
  await axios.get(`${BASE_URL}/${url}`).then(({ data: axiosResponse }) => {
    axiosResponse.results
      .filter((result) => {
        return result.official === true
      })
      .map((result) => {
        const videoObject = {
          key: result.key,
          site: result.site,
          name: result.name,
        }
        return videos.push(videoObject)
      })
    })
    return videos

}
