'use client'

import { useState } from 'react'
import styles from './ProductCard.module.css'
import { toast } from 'react-toastify'
import { Alert } from '../Alert'
import { Modal } from '../Modal'

export default function ProductCard({ product }) {
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false)
  const [showProductDetails, setShowProductDetails] = useState(false)

  if (!product) {
    return null
  }

  const handleAddToCartClick = () => {
    setShowAddToCartAlert(true)
  }

  const handleConfirmAddToCart = () => {
    toast.success(`${product.title} adicionado ao carrinho! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const handleViewDetails = () => {
    setShowProductDetails(true)
  }

  const renderStars = () => {
    const fullStars = Math.floor(product.rating.stars);
    return '⭐'.repeat(fullStars);
  }

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
      
      <div className={styles.productActions}>
        <button 
          className={`${styles.actionButton} ${styles.viewDetailsButton}`}
          onClick={handleViewDetails}
          title="Ver detalhes do produto"
        >
          👁️ Detalhes
        </button>
        <button 
          className={`${styles.actionButton} ${styles.addToCartButton}`}
          onClick={handleAddToCartClick}
          title="Adicionar ao carrinho"
        >
          🛒 Carrinho
        </button>
      </div>

      <Alert
        isOpen={showAddToCartAlert}
        onClose={() => setShowAddToCartAlert(false)}
        type="question"
        title="Adicionar ao Carrinho"
        message={`Deseja adicionar "${product.title}" ao seu carrinho?`}
        onConfirm={handleConfirmAddToCart}
        confirmText="Sim, adicionar"
        cancelText="Cancelar"
      />

      <Modal
        isOpen={showProductDetails}
        onClose={() => setShowProductDetails(false)}
        title={product.title}
        size="medium"
      >
        <div className={styles.productDetailsModal}>
          {renderImage()}
          <div className={styles.detailsContent}>
            <div className={styles.detailsPrice}>{product.price}</div>
            <div className={styles.detailsDescription}>
              <h4>Descrição:</h4>
              <p>{product.description}</p>
            </div>
            <div className={styles.detailsSpecs}>
              <h4>Especificações:</h4>
              <ul>
                <li><strong>Categoria:</strong> {product.category}</li>
                <li><strong>Avaliação:</strong> {renderStars()} ({product.rating.stars})</li>
                <li><strong>Avaliações:</strong> {product.rating.reviews.toLocaleString()}</li>
                {product.warranty && <li><strong>Garantia:</strong> {product.warranty}</li>}
                {product.brand && <li><strong>Marca:</strong> {product.brand}</li>}
              </ul>
            </div>
            <button 
              className={`${styles.actionButton} ${styles.addToCartButton} ${styles.modalCartButton}`}
              onClick={() => {
                setShowProductDetails(false)
                handleAddToCartClick()
              }}
            >
              🛒 Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
