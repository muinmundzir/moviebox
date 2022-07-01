import React from 'react'

import { ChevronRight } from 'assets/icons'
import { MoviesContainer } from 'components/Container/MoviesContainer'
import { VideosContainer } from './VideosContainer'
import { CastsContainer } from './CastsContainer'

interface ListPropsTypes {
  header: string
  movieType?: 'featured' | 'upcoming'
  listType: 'movies' | 'videos' | 'casts'
}

export const List = ({ header, movieType, listType }: ListPropsTypes) => {
  const renderElement = listType === 'movies' ? (
    <MoviesContainer movieType={movieType} />
  ) : listType === 'videos' ? (
    <VideosContainer />
  ) : <CastsContainer />

  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">{header}</h2>
        <div className="flex gap-4 items-center">
          <a className="text-lg text-rose-700" href="#seemore">
            See more
          </a>
          <ChevronRight />
        </div>
      </div>

      {/* Cards container */}
      <div className={`flex gap-6 ${listType === 'videos' ? 'md:gap-6' : 'md:gap-20'} flex-nowrap overflow-x-scroll no-scrollbar`}>
        {renderElement}
      </div>
      {/* Cards container end */}
    </section>
  )
}
