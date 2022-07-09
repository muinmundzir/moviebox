import React from 'react'

import { ChevronRight } from 'assets/icons'

interface ListPropsTypes {
  header: string
  listType: 'movies' | 'videos' | 'casts'
  children: React.ReactNode
}

export const List = ({ header, listType, children }: ListPropsTypes) => {

  return (
    <section className="container mx-auto px-3 md:px-6 mb-20">
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
        {children}
      </div>
      {/* Cards container end */}
    </section>
  )
}
