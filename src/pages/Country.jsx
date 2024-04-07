import { Container, CountryInfo, Section } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { useState } from 'react';

const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  useEffect(() => {
    (async () => {
      const country = await fetchCountry(countryId);

      setCountry(country);
    })();
  }, [countryId]);
  return (
    <Section>
      <Container>{country && <CountryInfo country={country} />}</Container>
    </Section>
  );
};

export default Country;
