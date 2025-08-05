import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  loading = false 
}) {
  if (!categories || categories.length === 0) {
    return null
  }

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      'todas': 'Todas as Categorias',
      'smartphones': 'Smartphones',
      'laptops': 'Laptops',
      'tablets': 'Tablets',
      'acessorios': 'Acessórios'
    }
    return categoryNames[category] || category
  }

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Categorias</h3>
      <div className={styles.categoryList} role="tablist">
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ''
            } ${loading ? styles.loading : ''}`}
            onClick={() => onCategoryChange(category)}
            disabled={loading}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-label={`Filtrar por ${getCategoryDisplayName(category)}`}
          >
            <span className={styles.categoryName}>
              {getCategoryDisplayName(category)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
