import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'components/layouts'
import { HomePage } from 'pages/HomePage'
import { DetailPage } from 'pages/DetailPage'
import { ScrollToTop } from 'services/utilities/ScrollToTop'
import { SearchPage } from 'pages/SearchPage'

const MovieApp = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:id/*" element={<DetailPage />} />
          <Route path="search/:query" element={<SearchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default MovieApp
