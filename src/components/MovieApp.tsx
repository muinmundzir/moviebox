import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'components/layouts'
import { HomePage } from 'pages/HomePage'
import { DetailPage } from 'pages/DetailPage'
import { ScrollToTop } from 'services/utilities/ScrollToTop'

const MovieApp = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:id/*" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default MovieApp
