import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ backRef }) => {
  return (
    <Link className={styles.link} to={backRef}>
      Go back
    </Link>
  );
};
