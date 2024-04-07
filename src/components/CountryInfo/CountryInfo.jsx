// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }

import styles from './CountryInfo.module.css';

export const CountryInfo = ({ country }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img
          className={styles.img}
          src={country.flag}
          alt={country.countryName}
        />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{country.capital}</span>
        </h3>

        <h1 className={styles.title}>
          {country.countryName === 'Russian Federation'
            ? 'MORDOR'
            : country.countryName}
        </h1>

        <p className={styles.details}>
          Population:{' '}
          <span className={styles.accent}>{country.population}</span>
        </p>

        <p className={styles.details}>
          Languages:{' '}
          <span className={styles.accent}>{country.languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};
