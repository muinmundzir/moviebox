import React from 'react'

interface CastCardProps {
  name: string
  profilePath: string
}

export const CastCard = ({ name, profilePath }: CastCardProps) => {
  return (
    <div className="flex-[0_0_auto]">
      <img
        className="mb-3 w-[250px] h-[370px]"
        src={`https://image.tmdb.org/t/p/original/${profilePath}`}
        alt=""
      />
      <p className="font-bold text-lg">{name}</p>
    </div>
  )
}
