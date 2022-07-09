import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { List, MovieInfo } from 'components'
import { MoviesContainer } from 'components/Container/MoviesContainer'

import { fetchDetails, fetchSimilar } from 'services/fetch/getMovies'
import { MovieDetails, MovieTypes } from 'services/types/MovieTypes'

export const DetailPage = (): JSX.Element => {
  const [movie, setMovie] = useState<MovieDetails | null>(null)
  const [similarMovies, setSimilarMovies] = useState<MovieTypes[]>(null)
  const params = useParams()

  const getDetails = useCallback(async (id: number) => {
    await fetchDetails(id).then((res: MovieDetails) => setMovie(res))
  }, [])

  const getSimilar = useCallback(async (id: number) => {
    await fetchSimilar(id).then((res) => {
      const featured: MovieTypes[] = res.splice(0, 6)
      const similarMovies = []
      for (const resp of featured) {
        similarMovies.push(resp)
      }
      setSimilarMovies(similarMovies)
    })
  }, [])

  useEffect(() => {
    getDetails(parseInt(params.id))
    getSimilar(parseInt(params.id))
  }, [params.id, getDetails, getSimilar])

  return (
    <>
      {movie && (
        <>
          <MovieInfo
            backdropPath={movie.backdrop_path}
            title={movie.title ? movie.title : movie.original_title}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
          <List header="Similar Movies" listType="movies">
            {similarMovies && <MoviesContainer moviesProps={similarMovies} />}
          </List>
        </>
      )}
    </>
  )
}
