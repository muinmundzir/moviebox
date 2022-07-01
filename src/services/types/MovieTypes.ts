export interface genreTypes {
  id: number
}

export interface genreWithNameTypes {
  id: number
  name: string
}

export interface productionProfileTypes {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface productionCountriesTypes {
  iso_3166_1: string
  name: string
}

export interface spokenLanguangeTypes {
  english_name: string
  iso_639_1: string
  name: string
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

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: genreWithNameTypes[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: productionProfileTypes[]
  production_countries: productionCountriesTypes[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: spokenLanguangeTypes[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

