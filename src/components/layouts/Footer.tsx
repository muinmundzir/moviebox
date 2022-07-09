import { Facebook, Instagram, Twitter, Youtube } from 'assets/icons'
import React from 'react'

export const Footer = () => {
  const footerItem = [
    { link: 'conditions', name: 'Conditions of Use' },
    { link: 'privacy', name: 'Privacy & Policy' },
    { link: 'press', name: 'Press Room' },
  ]
  return (
    <footer className="container mx-auto px-3 md:px-6">
      <section className="">
        <div className="flex gap-6 md:justify-center items-center mb-9">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
        <ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 space-y-6 md:space-y-0 mb-9">
          {footerItem.map((item) => {
            return (
              <li key={item.link}>
                <a className="font-bold text-lg text-gray-900" href={`#${item.link}`}>{item.name}</a>
              </li>
            )
          })}
        </ul>
        <p className="pb-6 font-bold text-lg text-gray-500 md:text-center">© 2022 MovieBox by M. Mu'in Mundzir</p>
      </section>
    </footer>
  )
}
