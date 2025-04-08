import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
