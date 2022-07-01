import React from 'react'

import { Layout } from 'components/layouts'
import { HeroContainer } from 'components'
import { List } from './Container/List'

const MovieApp = () => {
  return (
    <Layout>
      <HeroContainer />
      <List header="Featured Movie" movieType="featured" listType="movies" />
      <List header="New Arrival" movieType="upcoming" listType="movies" />
      <List header="Exclusive Video" listType="videos" />
      <List header="Featured Casts" listType="casts" />
    </Layout>
  )
}

export default MovieApp
