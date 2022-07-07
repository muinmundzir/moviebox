import React from 'react'
import { useParams } from 'react-router'

import { SearchMoviesContainer } from 'components'

export const SearchPage = () => {
  const params = useParams()
  
  return (
    <section className="container mx-auto px-6 mt-28 mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">Search Result of: "{params.query.replace("-", "")}"</h2>
      </div>

      {/* Cards container */}
      <div className={`flex flex-wrap gap-6 md:gap-16 justify-center sm:justify-between md:justify-around`}>
        <SearchMoviesContainer />
      </div>
      {/* Cards container end */}
    </section>
  )
}