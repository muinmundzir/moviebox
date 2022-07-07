import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { MovieCard } from 'components/Card/MovieCard'
import { ContentLoader } from 'components/ContentLoader'

import { fetchBatchDetails, fetchQueryMovie } from 'services/fetch/getMovies'
import { MovieDetails } from 'services/types/MovieTypes'

export const SearchMoviesContainer = () => {
  const [movies, setMovies] = useState<MovieDetails[]>([])
  const [loading, setLoading] = useState(false)
  const params = useParams()

  const getMovieDetails = async (ids: number[]) => {
    await fetchBatchDetails(ids).then((res) => {
      setMovies(res)
      
      setLoading(false)
    })
  }

  const getSearchMovies = useCallback(async (query: string) => {
    await fetchQueryMovie(query).then((res) => {
      const ids = []
      for (const movie of res) {
        ids.push(movie.id)
      }

      getMovieDetails(ids)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    getSearchMovies(params.query)
  }, [getSearchMovies, params.query])

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
