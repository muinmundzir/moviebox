import React, { useCallback, useEffect, useState } from 'react'

import Hero from './Hero'

import { fetchTrending } from 'services/fetch/getMovies'
import { MovieTypes } from 'services/types/MovieTypes'

export const HeroContainer = () => {
  const [movieHighlight, setMovieHighlight] = useState<MovieTypes>(null)

  const getRandomNum = () => {
    return Math.floor(Math.random() * 20)
  }

  const fetchTrendingMovies = useCallback(async () => {
    const randomNum = getRandomNum()
    await fetchTrending().then((res) => {
      setMovieHighlight(res[randomNum])
    })
  }, [])

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <>
      {movieHighlight && (
        <Hero
          originalTitle={movieHighlight.original_title}
          title={movieHighlight.title}
          overview={movieHighlight.overview}
          backdropPath={movieHighlight.backdrop_path}
          posterPath={movieHighlight.poster_path}
        />
      )}
    </>
  )
}
