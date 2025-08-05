import styles from './Rating.module.css'

export default function Rating({ rating, showReviews = true, size = "md" }) {
  if (!rating) return null

  const { stars, count, reviews } = rating
  const maxStars = 5
  const fullStars = Math.floor(stars)
  const hasHalfStar = stars % 1 !== 0
  const emptyStars = maxStars - Math.ceil(stars)

  const renderStars = () => {
    const starElements = []

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <span key={`full-${i}`} className={`${styles.star} ${styles.full} ${styles[size]}`}>
          ★
        </span>
      )
    }

    // Meia estrela
    if (hasHalfStar) {
      starElements.push(
        <span key="half" className={`${styles.star} ${styles.half} ${styles[size]}`}>
          ★
        </span>
      )
    }

    // Estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(
        <span key={`empty-${i}`} className={`${styles.star} ${styles.empty} ${styles[size]}`}>
          ★
        </span>
      )
    }

    return starElements
  }

  return (
    <div className={styles.rating}>
      <div className={styles.stars} aria-label={`${count} de 5 estrelas`}>
        {renderStars()}
      </div>
      
      {showReviews && (
        <div className={styles.reviews}>
          <span className={styles.count}>{count}</span>
          <span className={styles.reviewText}>
            ({reviews} {reviews === 1 ? 'avaliação' : 'avaliações'})
          </span>
        </div>
      )}
    </div>
  )
}
