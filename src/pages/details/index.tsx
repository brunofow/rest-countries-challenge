import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { ThemeContext } from '../../contexts/ThemeContext';
import { api } from '../../services/api';
import { Container } from '../../styles/global';
import { CountryProps } from '../countries';

import {
  BackContainer,
  BackButton,
  CountryContainer,
  Flag,
  CountryDetails,
  Footer
} from './styles'
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';


export default function Details({ query }: { query: ParsedUrlQuery }) {
  const [country, setCountry] = useState<CountryProps>({} as CountryProps)
  const [borders, setBorders] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const { theme } = useContext(ThemeContext)
  const { countryName } = query;
  const router = useRouter();

  useEffect(() => {
    console.log(query)
  }, [query])

  useEffect(() => {
    async function loadCountryDetails() {
      setIsLoading(true)
      const response = await api.get(`/name/${countryName}`)

      setCountry(response.data[0]);
      setIsLoading(false);
      loadBorders(response.data[0])
    }

    loadCountryDetails();
  }, [countryName])


  function loadBorders(country: CountryProps) {
    country.borders?.map(async (border) => {
      const response = await api.get(`/alpha/${border}`);
      const borderName = response.data.name;
      setBorders(borders => [...borders, borderName]);
    })
  }

  function goToBorderCountry(countryName: string) {
    router.push(`/details`, {
      query: { countryName },
    }).then(() => router.reload())
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <BackContainer>
          <Link href="/">
            <BackButton>
              <BsArrowLeft size={20} />
              Back
            </BackButton>
          </Link>
        </BackContainer>
        {isLoading ? <Spinner /> : (
          <CountryContainer>
            <Flag>
              <Image src={country.flag} alt={country.name} layout="fill" />
            </Flag>
            <CountryDetails>
              <h2>{country.name}</h2>
              <div>
                <div className="left">
                  <span> <strong>Native Name: </strong> {country.nativeName} </span>
                  <span> <strong>Population: </strong> {country.population.toLocaleString()} </span>
                  <span> <strong>Region: </strong> {country.region} </span>
                  <span> <strong>Sub Region: </strong> {country.subRegion} </span>
                  <span> <strong>Capital: </strong> {country.capital} </span>
                </div>
                <div className="right">
                  <span> <strong>Top Level Domain: </strong> {country.topLevelDomain} </span>
                  <span> <strong>Currencies: </strong> {country.currencies.map(currency => currency.name)} </span>
                  <span> <strong>Languages: </strong> {country.languages.map(language => language.name)} </span>
                </div>
              </div>
              <Footer>
                <strong>Border Countries: </strong>
                <div>
                  {borders.map((border, index) => (
                    <span onClick={() => goToBorderCountry(border)} key={index} > {border} </span>
                  ))}
                </div>
              </Footer>
            </CountryDetails>
          </CountryContainer>
        )}

      </Container>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: { query: context.query }
  }
}