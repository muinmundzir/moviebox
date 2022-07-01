import React, { useEffect, useState } from 'react'

import { Heart } from 'assets/icons'
import { genreWithNameTypes } from 'services/types/MovieTypes'

interface MovieCardProps {
  originalTitle: string
  relesaseDate: string
  posterPath: string
  movieGenres: genreWithNameTypes[]
  productionCountry: {
    iso_3166_1: string
    name: string
  }[]
}

export const MovieCard = ({
  movieGenres,
  relesaseDate,
  originalTitle,
  posterPath,productionCountry
}: MovieCardProps) => {
  const [genres, setGenres] = useState([])

  const getGenres = () => {
    const joinGenres = movieGenres?.map((genre) => genre.name)
    setGenres(joinGenres)
  }

  const getReleaseYear = relesaseDate.substring(0, 4)
  const getProductionCountry = productionCountry[0].name

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div className="relative flex-[0_0_auto] flex flex-col gap-3 max-w-[250px]">
      <img
        className="w-full h-[370px]"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt=""
      />
      <div className="absolute pt-5 px-4 left-0 right-0 flex items-center">
        <button className="bg-[#F3F4F680] p-1 rounded-full ml-auto hover:scale-[1.1] transition duration-100 hover:bg-rose-700">
          <Heart />
        </button>
      </div>
      <p className="font-bold text-xs text-gray-400">{getProductionCountry}, {getReleaseYear}</p>
      <h3 className="font-bold text-lg">{originalTitle}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/images/imdb.jpg" alt="" />
          <span className="text-xs">86.0/100</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="/images/rotten-tomatoes.png" alt="" />
          <span className="text-xs">97%</span>
        </div>
      </div>
      <span className="font-bold text-xs text-gray-400">
        {genres.join(', ')}
      </span>
    </div>
  )
}
