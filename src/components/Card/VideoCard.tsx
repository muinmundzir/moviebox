import { Play } from 'assets/icons'
import React, { useCallback, useEffect, useState } from 'react'

import { fetchVideos } from 'services/fetch/getMovies'

interface VideoCardProps {
  id?: number
  name?: string
  backdropPath?: string
}

export const VideoCard = ({ id, name, backdropPath }: VideoCardProps) => {
  const [videos, setVideos] = useState(null)

  const getVideos = useCallback(async (id: number) => {
    await fetchVideos(id).then((res) => setVideos(res[0]))
  }, [])

  useEffect(() => {
    getVideos(id)
  }, [getVideos, id])

  return (
    <>
      {videos && (
        <div className="relative flex-[0_0_auto] aspect-video w-full md:w-[450px]">
          <img
            className="mb-3"
            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
            alt=""
          />
          <Play className="absolute w-10 h-10 -ml-5 -mt-16 top-[50%] left-[50%]" />
          <p className="font-bold text-lg">{videos.name}</p>
        </div>
      )}
    </>
  )
}
