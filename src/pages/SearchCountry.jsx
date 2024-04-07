import { Container, Section, SearchForm, CountryList } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [regionCountries, setregionCountries] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const regionParams = searchParams.get('region');
  useEffect(() => {
    if (!regionParams) return;
    (async () => {
      const regionCountries = await fetchByRegion(regionParams);

      setregionCountries(regionCountries);
    })();
  }, [regionParams]);

  const onSubmitForm = value => {
    setSearchParams({
      region: value,
    });
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
