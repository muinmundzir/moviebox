import React from 'react'

import { Plus } from 'assets/icons'

interface MovieInfoProps {
  backdropPath: string
  title: string
  overview: string
}

export const MovieInfo = ({backdropPath, title, overview}: MovieInfoProps) => {
  return (
    <>
    <section
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})`,
        }}
        className="h-[351px] bg-center bg-cover bg-no-repeat mb-16 md:mb-[70px] md:h-[351px] md:bg-cover md:bg-center"
      ></section>
      <section className="container mx-auto grid grid-cols-2 md:mb-16">
        <article className="px-6">
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
        <div className="space-y-4">
          <button className="rounded-md flex items-center gap-[10px] bg-rose-700 font-bold text-white text-2xl py-5 px-4 w-[486px] justify-center mx-auto">
            <span className="-mt-[2px]">Buy $21.22</span>
          </button>
          <button className="rounded-md flex items-center gap-[10px] bg-gray-100 font-bold text-black text-2xl py-5 px-4 w-[486px] justify-center mx-auto">
            <span className="-mt-[2px]">Rent $5.2</span>
          </button>
          <button className="rounded-md flex items-center gap-[10px] bg-gray-100 font-bold text-black text-2xl py-5 px-4 w-[486px] justify-center mx-auto">
            <Plus />
            <span className="-mt-[2px]">Add to list</span>
          </button>
        </div>
      </section>
    </>
  )
}
