import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    (async () => {
      const countries = await fetchByRegion('europe');

      setCountries(countries);
    })();
  }, []);
  return (
    <Section>
      <Container>
        {countries && <CountryList countries={countries}></CountryList>}
      </Container>
    </Section>
  );
};
export default Home;
