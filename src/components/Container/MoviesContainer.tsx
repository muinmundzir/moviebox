import React, { useCallback, useEffect, useState } from 'react'

import { MovieCard } from 'components/Card/MovieCard'
import { MovieDetails, MovieTypes } from 'services/types/MovieTypes'
import { ContentLoader } from 'components/ContentLoader'

import { fetchBatchDetails } from 'services/fetch/getMovies'

interface MovieContainerProps {
  moviesProps?: MovieTypes[]
}

export const MoviesContainer = ({
  moviesProps,
}: MovieContainerProps): JSX.Element => {
  const [movies, setMovies] = useState<MovieDetails[]>([])
  const [loading, setLoading] = useState(false)

  const getMovieDetails = async (ids: number[]) => {
    await fetchBatchDetails(ids).then((res) => {
      setMovies(res)
      setLoading(false)
    })
  }

  const getMovies = useCallback(() => {
    const ids = []
    for (const movie of moviesProps) {
      ids.push(movie.id)
    }

    getMovieDetails(ids)
  }, [moviesProps])

  useEffect(() => {
    setLoading(true)
    getMovies()
  }, [getMovies])

  const movieCard = movies.map((movie) => {
    return (
      <MovieCard
        id={movie.id}
        key={movie.id}
        relesaseDate={movie.release_date}
        posterPath={movie.poster_path}
        title={movie.title}
        movieGenres={movie.genres}
        productionCountry={movie.production_countries}
      />
    )
  })

  return <>{loading ? <ContentLoader /> : movieCard}</>
}
