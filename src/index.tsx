import React from 'react'
import { createRoot } from 'react-dom/client'
import MovieApp from 'components/MovieApp'

// import style
import './styles/style.css'

const root = createRoot(document.getElementById('root'))
root.render(<MovieApp />)
