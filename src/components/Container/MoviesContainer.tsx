import React, { useCallback, useEffect, useState } from 'react'

import { MovieCard } from 'components/Card/MovieCard'
import { MovieDetails } from 'services/types/MovieTypes'
import { getDetails, getTrending, fetchUpcoming } from 'services/fetch/getMovies'

interface MovieContainerProps {
  movieType: 'featured' | 'upcoming'
}

export const MoviesContainer = ({ movieType }: MovieContainerProps): JSX.Element => {
  const [movies, setMovies] = useState<MovieDetails[]>([])

  const getMovieDetails = async (id: number) => {
    const result = await getDetails(id)
    setMovies((prevState) => [...prevState, result])
  }

  const getMovies = useCallback(async (movieType: string) => {
    movieType === 'featured'
      ? await getTrending().then((res) => {
          const featured = res.splice(0, 6)
          for (const resp of featured) {
            getMovieDetails(resp.id)
          }
        })
      : await fetchUpcoming().then((res) => {
          const featured = res.splice(0, 6)
          for (const resp of featured) {
            getMovieDetails(resp.id)
          }
        })
  }, [])

  useEffect(() => {
    getMovies(movieType)
  }, [])

  const movieCard = movies?.map((movie) => {
    return (
      <MovieCard
        key={movieType === 'featured' ? movie.id : movie.imdb_id}
        relesaseDate={movie.release_date}
        posterPath={movie.poster_path}
        originalTitle={movie.original_title}
        movieGenres={movie.genres}
        productionCountry={movie.production_countries}
      />
    )
  })

  return <>{movieCard}</>
}
