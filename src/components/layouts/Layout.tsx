import React from 'react'
import { Navbar } from '.'
import { Footer } from '.'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="mb-32">{children}</main>
      <Footer />
    </>
  )
}
