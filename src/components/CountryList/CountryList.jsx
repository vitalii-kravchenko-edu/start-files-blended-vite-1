import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.id}`}>
            <img src={item.flag} alt={item.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
