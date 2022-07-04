import React from 'react'

import { Plus } from 'assets/icons'

import useIsMobile from 'services/hooks/useIsMobile'

interface MovieInfoProps {
  backdropPath: string
  posterPath: string
  title: string
  overview: string
}

export const MovieInfo = ({backdropPath, title, overview, posterPath}: MovieInfoProps) => {
  const isMobile = useIsMobile()
  const heroImage = isMobile ? posterPath : backdropPath
  return (
    <>
    <section
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroImage})`,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'darken',
        }}
        className="h-[748px] bg-center bg-cover bg-no-repeat mb-16 md:mb-[70px] md:h-[351px] md:bg-cover md:bg-center"
      ></section>
      <section className="container mx-auto grid grid-rows-2 md:grid-cols-2 md:mb-16">
        <article className="px-6 mb-16 md:mb-0">
          <h1 className="font-bold text-5xl mb-6">{title}</h1>
          <div className="flex gap-9 items-center mb-6">
            <div className="flex items-center gap-3">
              <img src="/images/imdb.jpg" alt="" />
              <span className="text-xs">86.0/100</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/rotten-tomatoes.png" alt="" />
              <span className="text-xs">97%</span>
            </div>
          </div>
          <p className="font-medium text-sm">{overview}</p>
        </article>
        <div className="px-6 space-y-4">
          <button className="rounded-md flex items-center gap-[10px] bg-rose-700 font-bold text-white text-lg md:text-2xl py-3 md:py-5 md:px-4 w-full md:w-[486px] justify-center mx-auto">
            <span className="-mt-[2px]">Buy $21.22</span>
          </button>
          <button className="rounded-md flex items-center gap-[10px] bg-gray-100 font-bold text-black text-lg md:text-2xl py-3 md:py-5 md:px-4 w-full md:w-[486px] justify-center mx-auto">
            <span className="-mt-[2px]">Rent $5.2</span>
          </button>
          <button className="rounded-md flex items-center gap-[10px] bg-gray-100 font-bold text-black text-lg md:text-2xl py-3 md:py-5 md:px-4 w-full md:w-[486px] justify-center mx-auto">
            <Plus />
            <span className="-mt-[2px]">Add to list</span>
          </button>
        </div>
      </section>
    </>
  )
}
