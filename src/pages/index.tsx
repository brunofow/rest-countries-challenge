import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import GlobalStyles from '../styles/global'
import Header from '../components/Header'
import { ThemeContext } from '../contexts/ThemeContext'
import { Container } from '../styles/global'
import {
  SearchContainer,
  InputBox,
  Input,
  DropdownContainer,
  Countries,
  Country,
  Flag,
  Details
} from './styles'
import { useRef } from 'react'
import ReactDropdown from 'react-dropdown'
import { useState } from 'react'
import { api } from '../services/api'
import { CountryProps } from './countries'
import Spinner from '../components/Spinner'

export default function Home() {
  const [allCountries, setAllCountries] = useState<CountryProps[]>([])
  const [countries, setCountries] = useState<CountryProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const { theme } = useContext(ThemeContext)
  const inputRef = useRef<HTMLInputElement>(null)

  async function loadByRegion(region: string) {
    if (region == 'All') {
      setCountries(allCountries)
      return;
    }
    const response = await api.get(`/region/${region}`)
    setCountries(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    async function loadCountries() {
      const response = await api.get('/all');

      setAllCountries(response.data);
      setCountries(response.data);
      setIsLoading(false);
    }
    loadCountries();
  }, [])

  function focusInput() {
    inputRef.current?.focus();
  }

  useEffect(() => {
    if (search.length == 0) {
      setCountries(allCountries);
    }
    if (allCountries.length == 0) {
      const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase())
      })
      setAllCountries(countries);
      setCountries(filteredCountries)
    } else {
      const filteredCountries = allCountries.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase())
      })
      setCountries(filteredCountries)
    }
  }, [search])

  const options = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'All',
  ]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <SearchContainer>
          <InputBox>
            <Input value={search} onChange={event => setSearch(event.target.value)} ref={inputRef} placeholder='Search for a country' autoComplete='new-password' />
            <FiSearch onClick={focusInput} size={18} color={theme.title === 'light' ? "#858585" : "#b9c7d5"} />
          </InputBox>
          <DropdownContainer>
            <Dropdown onChange={event => loadByRegion(event.value)} className='dropdown' options={options} placeholder='Filter by Region' />
            <RiArrowDropDownLine size={20} />
          </DropdownContainer>
        </SearchContainer>
        {isLoading && <Spinner />}
        <Countries>
          {countries.map((country, index) => (
            <Link key={index} href={`/details?countryName=${country.name}`}>
              <Country>
                <Flag>
                  <Image src={country.flag} alt={country.name} layout='fill' />
                </Flag>
                <Details>
                  <strong>{country.name}</strong>
                  <p>Population: <span> {country.population.toLocaleString()} </span></p>
                  <p>Region: <span> {country.region} </span></p>
                  <p>Capital: <span> {country.capital} </span></p>
                </Details>
              </Country>
            </Link>
          ))}
        </Countries>
      </Container>
    </ThemeProvider>
  )
}
