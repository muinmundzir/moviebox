import { HeroContainer, List } from 'components'
import React, { useCallback, useEffect, useState } from 'react'

import { CastsContainer } from 'components/Container/CastsContainer'
import { MoviesContainer } from 'components/Container/MoviesContainer'
import { VideosContainer } from 'components/Container/VideosContainer'
import { fetchTrending, fetchUpcoming } from 'services/fetch/getMovies'

import { MovieTypes } from 'services/types/MovieTypes'

export const HomePage = () => {
  const [featuredMovie, setFeaturedMovie] = useState<MovieTypes[]>([])
  const [upcomingMovie, setUpcomingMovie] = useState<MovieTypes[]>([])

  const getFeaturedMovie = useCallback(async() => {
    await fetchTrending().then((movies) => setFeaturedMovie(movies.splice(0, 6)))
  }, [])

  const getUpcomingMovie = useCallback(async() => {
    await fetchUpcoming().then((movies) => setUpcomingMovie(movies.splice(0, 6)))
  }, [])

  useEffect(() => {
    getFeaturedMovie()
    getUpcomingMovie()
  }, [getFeaturedMovie, getUpcomingMovie])

  return (
    <>
      <HeroContainer />
      <List header="Featured Movie" listType="movies" >
        <MoviesContainer moviesProps={featuredMovie} />
      </List>
      <List header="New Arrival" listType="movies" >
        <MoviesContainer moviesProps={upcomingMovie} />
        </List>
      <List header="Exclusive Video" listType="videos" >
        <VideosContainer />
        </List>
      <List header="Featured Casts" listType="casts" >
        <CastsContainer />
      </List>
    </>
  )
}
