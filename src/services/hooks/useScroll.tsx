import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import useIsMobile from './useIsMobile'

export const useScroll = () => {
  const [scroll, setScroll] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()
  const detailPage =  location.pathname.includes('/movie/')

  const changeBackground = useCallback(() => {
    if(detailPage) {
      return window.scrollY >= 351 ? setScroll(true) : setScroll(false)
    }
    if (isMobile) {
      return window.scrollY >= 748 ? setScroll(true) : setScroll(false)
    }
    return window.scrollY >= 580 ? setScroll(true) : setScroll(false)
  }, [isMobile, detailPage])

  useEffect(() => {
    changeBackground()  

    window.addEventListener('scroll', changeBackground)

    return (() => window.removeEventListener('scroll', changeBackground))
  }, [changeBackground])

  return scroll
}
