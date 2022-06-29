import React from 'react'

import { LogoMobile, Menu, Search } from 'assets/icons'

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 container mx-auto">
      <div className="flex items-center gap-6">
        <LogoMobile />
        <a
          className="hidden md:block font-dm font-bold text-2xl text-white"
          href="#test"
        >
          MovieBox
        </a>
      </div>
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
