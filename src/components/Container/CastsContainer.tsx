import { CastCard } from 'components/Card/CastCard'
import { ContentLoader } from 'components/ContentLoader'
import React, { useCallback, useEffect, useState } from 'react'
import { fetchCasts } from 'services/fetch/getPeople'

export const CastsContainer = () => {
  const [casts, setCasts] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  const getCasts = useCallback(async () => {
    await fetchCasts().then((res) => {
      setCasts(res)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    getCasts()
  }, [getCasts])

  return (
    <>
      {loading ? (
        <ContentLoader />
      ) : (
        casts.map((cast, index) => {
          return (
            <CastCard
              key={index}
              name={cast.name}
              profilePath={cast.profilePath}
            />
          )
        })
      )}
    </>
  )
}
