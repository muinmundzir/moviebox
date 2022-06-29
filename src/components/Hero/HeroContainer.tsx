import React, { useCallback, useEffect, useState } from 'react'

import Hero from './Hero'

import { getTrending } from 'services/fetch/getMovies'
import { MovieTypes } from 'services/types/MovieTypes'

export const HeroContainer = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([])
  const [movieHighlight, setMovieHighlight] = useState<MovieTypes>(null)

  const getRandomNum = () => {
    return Math.floor(Math.random() * 20)
  }

  const getTrendingMovies = useCallback(async () => {
    const randomNum = getRandomNum()
    const response = await getTrending().then((res) => {
      console.log(res)
      setMovies(res)
      setMovieHighlight(res[randomNum])
    })
    console.log(response)
  }, [])

  useEffect(() => {
    getTrendingMovies()
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
