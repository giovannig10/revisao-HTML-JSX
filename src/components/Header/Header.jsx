import styles from './Header.module.css'
import Image from 'next/image'

export default function Header({  subtitle, totalProducts = 0 }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandText}>
            <h1 className={styles.logo}></h1>
          </div>
        </div>
        
      
      </div>
    </header>
  )
}
