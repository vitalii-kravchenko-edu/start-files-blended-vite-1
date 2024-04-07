import { Container, Section, SearchForm, CountryList } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [region, setRegion] = useState(null);
  const [regionCountries, setregionCountries] = useState(null);
  useEffect(() => {
    if (!region) return;
    (async () => {
      const regionCountries = await fetchByRegion(region);

      setregionCountries(regionCountries);
    })();
  }, [region]);

  const onSubmitForm = value => {
    setRegion(value);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmitForm={onSubmitForm} />
        {regionCountries && <CountryList countries={regionCountries} />}
      </Container>
    </Section>
  );
};
