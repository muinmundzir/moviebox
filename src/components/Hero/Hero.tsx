import React from 'react'

import { Play } from 'assets/icons'
import useIsMobile from 'services/hooks/useIsMobile'
import { Button } from 'components'

interface HeroProps {
  title: string
  originalTitle: string
  overview: string
  backdropPath: string
  posterPath: string
}

const Hero = ({
  title,
  originalTitle,
  overview,
  backdropPath,
  posterPath,
}: HeroProps) => {
  const isMobile = useIsMobile()
  const heroImage = isMobile ? posterPath : backdropPath

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'darken',
      }}
      className="h-[748px] bg-center bg-cover bg-no-repeat mb-16 md:mb-[70px] md:h-[600px] md:bg-top md:bg-cover"
    >
      <article className="container mx-auto pt-[420px] pl-6 md:pt-48 text-white">
        <h1 className="font-bold text-5xl mb-4 max-h-32 md:max-w-md text-clip">
          {title ? title : originalTitle}
        </h1>
        <div className="flex gap-9 mb-4">
          <div className="flex items-center gap-3">
            <img src="/images/imdb.jpg" alt="" />
            <span className="text-xs">86.0/100</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/rotten-tomatoes.png" alt="" />
            <span className="text-xs">97%</span>
          </div>
        </div>
        <p className="max-w-[290px] mb-6 font-medium text-sm max-h-20 overflow-y-hidden text-ellipsis">
          {overview}
        </p>
        <Button color="primary" size="base" icon={<Play />} text="WATCH TRAILER" />
      </article>
    </section>
  )
}

export default Hero
