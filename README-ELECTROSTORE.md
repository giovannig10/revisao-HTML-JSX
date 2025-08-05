# 🛒 ElectroStore - Loja de Eletrônicos

Uma moderna loja de eletrônicos desenvolvida com Next.js 15, seguindo as melhores práticas de performance e acessibilidade.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **CSS Modules** - Estilização isolada e modular
- **JavaScript ES6+** - Linguagem de programação moderna

## 📦 Funcionalidades

### ✅ Componentes Implementados

- **Header Component** - Navegação responsiva com logo prioritário
- **ProductCard Component** - Cards de produto com lazy loading
- **Not Found Page** - Página 404 customizada
- **Loading States** - Estados de carregamento otimizados

### ✅ Otimizações Next.js

- **Fonts**: Implementação de fontes locais com `localFont`
- **Images**: Otimização com `next/image` e lazy loading
- **Performance**: Seguindo Core Web Vitals
- **SEO**: Metadados otimizados
- **Accessibility**: ARIA labels e navegação por teclado

### ✅ CSS Modules & Styling

- **Variáveis CSS customizadas** para consistência
- **Design responsivo** para todos os dispositivos
- **High contrast mode** support
- **Reduced motion** support
- **Smooth animations** e transições

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.js          # Layout principal com Header
│   ├── page.js            # Página principal
│   ├── page.module.css    # Estilos da página principal
│   ├── not-found.jsx      # Página 404
│   ├── not-found.module.css
│   └── globals.css        # Estilos globais e variáveis CSS
├── components/
│   ├── Header/
│   │   ├── Header.jsx     # Componente de navegação
│   │   └── Header.module.css
│   └── ProductCard/
│       ├── ProductCard.jsx # Card de produto reutilizável
│       └── ProductCard.module.css
├── data/
│   └── products.js        # Dados mockados dos produtos
└── public/
    └── fonts/             # Fontes locais para performance
```

## 🎯 Requisitos Implementados

### Funcionais
- ✅ Header com props (title, subtitle, totalProducts)
- ✅ ProductCard reutilizável com props de produto
- ✅ useState para gerenciamento de estado
- ✅ Carregamento simulado de dados
- ✅ Contagem automática de produtos
- ✅ Página 404 customizada

### Técnicos
- ✅ CSS Modules em todos os componentes
- ✅ Fontes locais com localFont
- ✅ Otimização de imagens com next/image
- ✅ Priority loading para logo
- ✅ Lazy loading automático
- ✅ Performance otimizada (Core Web Vitals)

## 📱 Responsividade

O projeto foi desenvolvido com mobile-first approach:

- **Mobile** (< 480px): Layout em coluna única
- **Tablet** (768px): Layout adaptativo
- **Desktop** (> 1200px): Layout completo com grid

## ♿ Acessibilidade

- **ARIA labels** para leitores de tela
- **Focus management** com outline personalizado
- **High contrast mode** support
- **Reduced motion** para usuários sensíveis
- **Keyboard navigation** funcional

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Executar produção:**
   ```bash
   npm start
   ```

## 🎨 Customização

### Variáveis CSS
O projeto utiliza um sistema robusto de variáveis CSS em `globals.css`:

```css
:root {
  --primary-color: #ff6b35;
  --primary-hover: #e55a2b;
  --max-width: 1200px;
  --spacing-xl: 2rem;
  /* ... mais variáveis */
}
```

### Fontes
As fontes são carregadas localmente para melhor performance:
- **Cormorant Garamond** (títulos)
- **Geist Sans** (texto principal)
- **Geist Mono** (código/preços)

## 📊 Performance

- **Priority loading** para recursos críticos
- **Lazy loading** para imagens de produtos
- **CSS optimizado** com variáveis nativas
- **JavaScript minificado** automaticamente
- **Preconnect** para recursos externos

## 🔧 Próximas Melhorias

- [ ] Implementar carrinho de compras
- [ ] Adicionar filtros de produtos
- [ ] Sistema de busca
- [ ] Autenticação de usuários
- [ ] Integração com API real
- [ ] Tests unitários e E2E

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ usando Next.js 15**
