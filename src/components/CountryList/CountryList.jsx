import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.id}`} state={location}>
            <img src={item.flag} alt={item.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
