'use client'

import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  if (!product) {
    return null
  }

  // Renderizar estrelas baseado no rating
  const renderStars = () => {
    const fullStars = Math.floor(product.rating.stars);
    return '⭐'.repeat(fullStars);
  }

  // Renderizar imagem ou emoji
  const renderImage = () => {
    if (product.image === "emoji" && product.emoji) {
      return (
        <div className={styles.productImage}>
          {product.emoji}
        </div>
      )
    }

    return (
      <div className={styles.productImage}>
        <img 
          src={product.image}
          alt={product.alt}
          className={styles.productImageImg}
        />
      </div>
    )
  }

  return (
    <div className={styles.productCard} data-category={product.category}>
      {renderImage()}
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.productDescription}>{product.description}</div>
      <div className={styles.productRating}>
        <span className={styles.stars}>{renderStars()}</span>
        <span>({product.rating.stars}) - {product.rating.reviews.toLocaleString()} avaliações</span>
      </div>
    </div>
  )
}
