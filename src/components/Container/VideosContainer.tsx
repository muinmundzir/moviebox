import { VideoCard } from 'components/Card/VideoCard'
import React, { useCallback, useEffect, useState } from 'react'

import { fetchUpcoming, fetchVideos } from 'services/fetch/getMovies'

export const VideosContainer = () => {
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(async () => {
    await fetchUpcoming().then((res) => {
      const selectedMovies = res.splice(0, 6)
      setMovies(selectedMovies)
    })
  }, [])

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      {movies.map((movie) => {
        return (
          <VideoCard
            key={movie.id}
            id={movie.id}
            backdropPath={movie.backdrop_path}
            name={movie.title}
          />
        )
      })}
    </>
  )
}
