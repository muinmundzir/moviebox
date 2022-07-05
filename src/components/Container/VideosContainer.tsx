import { VideoCard } from 'components/Card/VideoCard'
import { ContentLoader } from 'components/ContentLoader'
import React, { useCallback, useEffect, useState } from 'react'

import { fetchUpcoming } from 'services/fetch/getMovies'

export const VideosContainer = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const getMovies = useCallback(async () => {
    await fetchUpcoming().then((res) => {
      const selectedMovies = res.splice(0, 6)
      setMovies(selectedMovies)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <>
      {loading ? (
        <ContentLoader />
      ) : (
        movies.map((movie) => {
          return (
            <VideoCard
              key={movie.id}
              id={movie.id}
              backdropPath={movie.backdrop_path}
              name={movie.title}
            />
          )
        })
      )}
    </>
  )
}
