import { Container, CountryInfo, GoBackBtn, Section } from 'components';
import { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { useState } from 'react';

const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  const backRef = useRef(location.state || '/');

  useEffect(() => {
    (async () => {
      const country = await fetchCountry(countryId);

      setCountry(country);
    })();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn backRef={backRef.current} />
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};

export default Country;
