import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchTrending = async () => {
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

export const fetchDetails = async (id: number) => {
  const url = `movie/${id}?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)

  return axiosResponse
}

export const fetchBatchDetails = async (ids: number[]) => {
  const movieDetails = []
  for (const id of ids) {
    await axios.get(`${BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_AUTH_KEY}`).then(res => movieDetails.push(res.data))
  }

  return movieDetails
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

export const fetchSimilar = async (id: number) => {
  const url = `movie/${id}/similar?api_key=${process.env.REACT_APP_AUTH_KEY}`
  const { data: axiosResponse } = await axios.get(`${BASE_URL}/${url}`)
  const { results } = axiosResponse
  return results
}
