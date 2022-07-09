import React from 'react'

import { Plus } from 'assets/icons'

import useIsMobile from 'services/hooks/useIsMobile'
import { Button } from 'components'

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
      <section className="container mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:mb-16">
        <article className="px-3 md:px-6 mb-16 md:mb-0">
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
        <div className="px-3 md:px-6 space-y-4">
          <Button color="primary" size="lg" text="Buy $21.22" customClass="justify-center mx-auto" />
          <Button color="sub" size="lg" text="Rent $5.2" customClass="justify-center mx-auto" />
          <Button color="sub" size="lg" text="Add to list" icon={<Plus />} customClass="justify-center mx-auto" />
        </div>
      </section>
    </>
  )
}
