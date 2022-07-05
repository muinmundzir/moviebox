import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export const ContentLoader = () => {
  return (
    <div className="h-[250px] flex justify-center items-center mx-auto">
      <TailSpin ariaLabel="loading-indicator" />
    </div>
  )
}
