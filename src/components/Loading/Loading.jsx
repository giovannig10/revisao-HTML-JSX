'use client';

import styles from './Loading.module.css';

export function Loading({ 
  size = 'medium', 
  text = 'Carregando...',
  overlay = false 
}) {
  const containerClass = overlay ? styles.overlay : styles.inline;

  return (
    <div className={`${containerClass} ${styles[size]}`}>
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
