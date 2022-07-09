import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Heart } from 'assets/icons'
import NotFound from 'assets/images/not-found.png'

import { genreWithNameTypes } from 'services/types/MovieTypes'

interface MovieCardProps {
  id: number
  title: string
  relesaseDate: string
  posterPath: string
  movieGenres: genreWithNameTypes[]
  productionCountry?: {
    iso_3166_1: string
    name: string
  }[]
}

export const MovieCard = ({
  id,
  movieGenres,
  relesaseDate,
  title,
  posterPath,
  productionCountry,
}: Partial<MovieCardProps>) => {
  const [genres, setGenres] = useState([])

  const getGenres = useCallback(() => {
    const joinGenres = movieGenres?.map((genre) => genre.name)
    setGenres(joinGenres)
  }, [movieGenres])

  const splitTitle = title?.replace(/\s+/g, '-').toLowerCase()
  const getReleaseYear = relesaseDate.substring(0, 4)
  const getProductionCountry = productionCountry[0]?.name ? productionCountry[0]?.name : '-'
  const posterSource = `https://image.tmdb.org/t/p/original/${posterPath}`

  useEffect(() => {
    getGenres()
  }, [getGenres])

  return (
    <Link
      className="group relative flex-[0_0_auto] flex flex-col gap-3 w-[250px] hover:-translate-y-2 hover:cursor-pointer hover:border-b-2 hover:border-rose-700 duration-100 ease-out"
      to={`../movie/${id}/${splitTitle}`}
    >
      <img
        className="w-full h-[370px]"
        src={posterPath ? posterSource : NotFound}
        alt=""
      />
      <div className="absolute pt-5 px-4 left-0 right-0 flex items-center">
        <button className="bg-[#F3F4F680] p-1 rounded-full ml-auto hover:scale-[1.1] transition duration-100 hover:bg-rose-700">
          <Heart />
        </button>
      </div>
      <p className="font-bold text-xs text-gray-400">
        {getProductionCountry}, {getReleaseYear}
      </p>
      <h3 className="font-bold text-lg group-hover:text-rose-700 duration-150">
        {title}
      </h3>
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
    </Link>
  )
}
