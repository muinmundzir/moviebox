import { CastCard } from 'components/Card/CastCard'
import React, { useCallback, useEffect, useState } from 'react'
import { fetchCasts } from 'services/fetch/getPeople'

export const CastsContainer = () => {
  const [casts, setCasts] = useState([])

  const getCasts = useCallback(async () => {
    await fetchCasts().then((res) => setCasts(() => res))
  }, [])

  useEffect(() => {
    getCasts()
  }, [getCasts])

  return (
    <>
      {casts.map((cast, index) => {
        return (
          <CastCard
            key={index}
            name={cast.name}
            profilePath={cast.profilePath}
          />
        )
      })}
    </>
  )
}
