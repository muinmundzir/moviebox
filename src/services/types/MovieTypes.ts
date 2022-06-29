export interface genreTypes {
  id: number
}

export interface MovieTypes {
  adult: boolean
  backdrop_path: string
  genre_ids: genreTypes[]
  id: number
  media_type: string
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
