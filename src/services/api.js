import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://api.electrostore.com' 
    : 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    console.log('🔄 Enviando requisição:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('✅ Resposta recebida:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export const apiService = {
  async getProducts() {
    try {
      const response = await api.get('/posts');
      return response.data.slice(0, 6).map((item, index) => ({
        id: item.id,
        title: `Produto ${item.title.substring(0, 20)}...`,
        price: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`,
        description: item.body.substring(0, 100) + '...',
        category: ['smartphones', 'laptops', 'tablets', 'acessorios'][index % 4],
        rating: {
          stars: (Math.random() * 2 + 3).toFixed(1),
          reviews: Math.floor(Math.random() * 1000 + 50)
        },
        image: 'emoji',
        emoji: ['📱', '💻', '📱', '🎧', '⌚', '🖥️'][index % 6],
        alt: `Imagem do produto ${item.id}`
      }));
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  async addToCart(productId, quantity = 1) {
    try {
      const response = await api.post('/posts', {
        productId,
        quantity,
        timestamp: new Date().toISOString()
      });
      return {
        success: true,
        cartId: response.data.id,
        message: 'Produto adicionado ao carrinho com sucesso!'
      };
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      throw error;
    }
  },

  async getReviews(productId) {
    try {
      const response = await api.get(`/posts/${productId}/comments`);
      return response.data.slice(0, 3).map(comment => ({
        id: comment.id,
        author: comment.name,
        email: comment.email,
        rating: (Math.random() * 2 + 3).toFixed(1),
        comment: comment.body,
        date: new Date().toLocaleDateString('pt-BR')
      }));
    } catch (error) {
      console.error('Erro ao buscar avaliações:', error);
      throw error;
    }
  },

  async subscribeNewsletter(email) {
    try {
      const response = await api.post('/posts', {
        email,
        type: 'newsletter',
        timestamp: new Date().toISOString()
      });
      return {
        success: true,
        message: 'Inscrição realizada com sucesso!'
      };
    } catch (error) {
      console.error('Erro ao inscrever newsletter:', error);
      throw error;
    }
  }
};

export default api;
