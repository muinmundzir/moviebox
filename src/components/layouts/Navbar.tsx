import React from 'react'
import { Link } from 'react-router-dom'

import { LogoMobile, Menu, Search } from 'assets/icons'
import { useScroll } from 'services/hooks/useScroll'

export const Navbar = () => {
  const scroll = useScroll()
  return (
    <header className={`z-20 fixed top-0 left-0 right-0 ${scroll ? 'bg-rose-600' : ''}  flex justify-between items-center px-6 py-4 container mx-auto duration-200 ease-out`}>
      <Link
        to="/"
      >
        <div className="flex items-center gap-6">
          <LogoMobile />
          <span className="hidden md:block font-dm font-bold text-2xl text-white">MovieBox</span>
        </div>
      </Link>
      <div className="relative">
        <input
          className="px-3 py-2 rounded-md bg-transparent border-2 ring-gray-300 border-gray-300 md:w-80 placeholder:text-gray-300
          lg:w-[525px] placeholder:font-dm placeholder:font-normal text-base text-gray-300"
          type="text"
          name="search"
          id="search"
          placeholder="Search Movie"
        />
        <Search className={`absolute top-3 right-3 w-4 h-4 aspect-square`} />
      </div>
      <div className="flex items-center gap-6">
        <a
          className="hidden md:block font-dm font-bold text-white"
          href="#test"
        >
          Sign In
        </a>
        <Menu />
      </div>
    </header>
  )
}
