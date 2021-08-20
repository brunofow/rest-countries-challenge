type LanguageProps = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

type CurrencyProps = {
  code: string
  name: string
  symbol: string
}

export type CountryProps = {
  name: string
  nativeName: string
  flag: string
  population: number
  currencies: CurrencyProps[]
  region: string
  capital: string
  borders: string[]
  topLevelDomain: string[]
  subRegion: string
  languages: LanguageProps[]
}
