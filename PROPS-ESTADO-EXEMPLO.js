// 📝 EXEMPLO DE USO DE PROPS E ESTADO - ElectroStore

// ==============================================================================
// 🎯 ESTRUTURA DE PRODUTO IMPLEMENTADA
// ==============================================================================

const productExample = {
  id: 1,
  title: 'Smartphone Galaxy Pro 256GB',           // ✅ Título completo do produto
  name: 'Smartphone Galaxy Pro',                  // ✅ Nome curto (compatibilidade)
  price: 'R$ 2.499,00',                          // ✅ Preço formatado
  description: 'Smartphone com câmera de 108MP...', // ✅ Descrição detalhada
  image: '/next.svg',                             // ✅ Caminho da imagem
  isNew: true,                                    // ✅ Produto novo?
  rating: {                                       // ✅ Sistema de avaliação
    stars: 5,                                     // Número de estrelas (1-5)
    count: 4.8,                                   // Média das avaliações
    reviews: 1234                                 // Quantidade de reviews
  },
  category: 'smartphones'                         // ✅ Categoria do produto
};

// ==============================================================================
// 🧩 COMPONENTES E SUAS PROPS
// ==============================================================================

// 1. 🏷️ ProductCard Component
// Uso: <ProductCard product={productExample} />
const ProductCardProps = {
  product: {
    // Todas as propriedades do produto acima
    // O componente é totalmente reutilizável
  }
};

// 2. ⭐ Rating Component  
// Uso: <Rating rating={product.rating} size="md" showReviews={true} />
const RatingProps = {
  rating: {
    stars: 5,        // Número de estrelas (obrigatório)
    count: 4.8,      // Média (obrigatório)
    reviews: 1234    // Total de reviews (obrigatório)
  },
  size: "sm | md | lg",     // Tamanho das estrelas (opcional, padrão: "md")
  showReviews: true         // Mostrar contagem de reviews (opcional, padrão: true)
};

// 3. 🏠 Header Component
// Uso: <Header title="ElectroStore" subtitle="Sua loja" totalProducts={6} />
const HeaderProps = {
  title: "ElectroStore",          // Título da loja (opcional, padrão: "ElectroStore")
  subtitle: "Sua loja de tech",   // Subtítulo (opcional)
  totalProducts: 6                // Total de produtos (opcional, padrão: 0)
};

// 4. 🔽 CategoryFilter Component
// Uso: <CategoryFilter categories={categories} activeCategory="all" onCategoryChange={handleChange} />
const CategoryFilterProps = {
  categories: [                   // Array de categorias (obrigatório)
    { id: "all", name: "Todos", count: 6 },
    { id: "smartphones", name: "Smartphones", count: 1 }
  ],
  activeCategory: "all",          // Categoria ativa (obrigatório)
  onCategoryChange: (categoryId) => {}, // Função callback (obrigatório)
  loading: false                  // Estado de carregamento (opcional, padrão: false)
};

// ==============================================================================
// 🔄 GERENCIAMENTO DE ESTADO COM HOOKS
// ==============================================================================

// 📄 Exemplo de uso na página principal (page.js)
import { useState, useEffect } from 'react';

function ExampleUsage() {
  // 🔄 Estados principais
  const [products, setProducts] = useState([]);           // Lista de produtos
  const [featuredProducts, setFeaturedProducts] = useState([]); // Produtos em destaque
  const [loading, setLoading] = useState(true);           // Estado de carregamento
  const [activeCategory, setActiveCategory] = useState("all"); // Categoria ativa
  const [totalProducts, setTotalProducts] = useState(0);  // Total de produtos
  const [error, setError] = useState(null);               // Estado de erro

  // 🔄 Effect para carregar produtos quando categoria muda
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simula carregamento de dados
        const productData = await fetchProducts(activeCategory);
        const featured = getFeaturedProducts();
        
        setProducts(productData);
        setFeaturedProducts(featured);
        setTotalProducts(productData.length);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setError('Falha ao carregar produtos. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [activeCategory]); // Dependência: recarrega quando categoria muda

  // 🔄 Handler para mudança de categoria
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return {
    // Estados expostos
    products,
    featuredProducts, 
    loading,
    activeCategory,
    totalProducts,
    error,
    // Handlers expostos
    handleCategoryChange
  };
}

// ==============================================================================
// 🛠️ FUNÇÕES UTILITÁRIAS IMPLEMENTADAS
// ==============================================================================

// 📦 Em src/data/products.js
export const fetchProducts = (category = "all") => {
  // Simula carregamento com Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === "all") {
        resolve(products);
      } else {
        const filtered = products.filter(p => p.category === category);
        resolve(filtered);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isNew);
};

// ==============================================================================
// 🎨 EXEMPLOS DE CSS MODULES
// ==============================================================================

// Arquivo: ProductCard.module.css
const cssModuleExample = `
.card {
  background: white;
  border-radius: var(--border-radius-lg, 12px);
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
  transition: all var(--transition-normal, 0.3s ease);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg, 0 8px 25px rgba(0, 0, 0, 0.15));
}

.newBadge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--primary-color, #ff6b35);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}
`;

// ==============================================================================
// ✅ FUNCIONALIDADES IMPLEMENTADAS
// ==============================================================================

const implementedFeatures = {
  "✅ Props dinâmicas": {
    "Header": "title, subtitle, totalProducts",
    "ProductCard": "product (objeto completo)",
    "Rating": "rating, size, showReviews", 
    "CategoryFilter": "categories, activeCategory, onCategoryChange"
  },
  
  "✅ Estado com useState": {
    "products": "Lista de produtos carregados",
    "loading": "Estado de carregamento",
    "activeCategory": "Categoria selecionada",
    "error": "Tratamento de erros"
  },
  
  "✅ Interatividade": {
    "Filtro por categoria": "useState + useEffect",
    "Carregamento simulado": "Promises com setTimeout",
    "Estados de loading": "Spinners e placeholders",
    "Tratamento de erro": "Try/catch com fallbacks"
  },
  
  "✅ Otimizações": {
    "CSS Modules": "Isolamento de estilos",
    "next/image": "Lazy loading + otimização",
    "Fontes locais": "localFont do Next.js",
    "Acessibilidade": "ARIA labels + navegação"
  }
};

// ==============================================================================
// 🚀 PRÓXIMOS PASSOS SUGERIDOS
// ==============================================================================

const nextSteps = [
  "🛒 Implementar carrinho de compras com Context API",
  "🔍 Adicionar sistema de busca com debounce",
  "💾 Persistir filtros no localStorage",
  "🌐 Integrar com API real (fetch/axios)",
  "🧪 Adicionar testes unitários (Jest + Testing Library)",
  "📱 PWA com service workers",
  "🎯 Analytics e tracking de eventos"
];

export default {
  productExample,
  implementedFeatures,
  nextSteps
};
