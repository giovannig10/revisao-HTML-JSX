export const products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    name: "iPhone 15 Pro Max 256GB",
    description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
    price: "R$ 8.999,00",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop&crop=center",
    alt: "iPhone 15 Pro Max",
    isNew: true,
    rating: {
      stars: 4.8,
      count: 4.8,
      reviews: 1234
    },
    category: "smartphones"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 512GB",
    name: "Samsung Galaxy S24 Ultra 512GB",
    description: "Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis.",
    price: "R$ 7.499,00",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop&crop=center",
    alt: "Samsung Galaxy S24 Ultra",
    isNew: false,
    rating: {
      stars: 4.7,
      count: 4.7,
      reviews: 987
    },
    category: "smartphones"
  },
  {
    id: 3,
    title: "MacBook Pro 14\" M3 Pro 18GB",
    name: "MacBook Pro 14\" M3 Pro 18GB",
    description: "Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração.",
    price: "R$ 15.999,00",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop&crop=center",
    alt: "MacBook Pro",
    isNew: true,
    rating: {
      stars: 4.9,
      count: 4.9,
      reviews: 2156
    },
    category: "laptops"
  },
  {
    id: 4,
    title: "Dell XPS 13 Intel i7 16GB SSD 512GB",
    name: "Dell XPS 13 Intel i7 16GB SSD 512GB",
    description: "Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional.",
    price: "R$ 6.799,00",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCVbG--NLGMq7_XfVvxcSyfxuQBhCxIdraOQKf9KffRMZS_8qn9M3z71bhgIaiCGZl8lAcpAZl9Ymro1CYt3LeCQM6r64txlY499BDmbxhzkzEUDTz9_HNSe3jpHwCOuzllHScb44&usqp=CAc",
    emoji: "💻 Dell XPS",
    alt: "Dell XPS",
    isNew: false,
    rating: {
      stars: 4.6,
      count: 4.6,
      reviews: 543
    },
    category: "laptops"
  },
  {
    id: 5,
    title: "iPad Pro 12.9\" M2 WiFi 128GB",
    name: "iPad Pro 12.9\" M2 WiFi 128GB",
    description: "O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.",
    price: "R$ 7.299,00",
    image: "data:image/webp;base64,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",
    emoji: "📱 iPad Pro",
    alt: "iPad Pro",
    isNew: true,
    rating: {
      stars: 4.8,
      count: 4.8,
      reviews: 1876
    },
    category: "tablets"
  },
  {
    id: 6,
    title: "Samsung Galaxy Tab S9+ 256GB",
    name: "Samsung Galaxy Tab S9+ 256GB",
    description: "Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.",
    price: "R$ 4.999,00",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ95bwd6HuxW3OTwx-79csoXcw8C81n3EKW-K9sOhMThSM4BvHIt2uDpm0nRWsl0kZr0__0Z7Kq4hLfLmaRcDQtzMB-GGNqCh7QMqppjZlopDnA40EdTml0HDTz9Smp8rILl-hR6dQ&usqp=CAc",
    emoji: "📱 Galaxy Tab",
    alt: "Galaxy Tab",
    isNew: false,
    rating: {
      stars: 4.5,
      count: 4.5,
      reviews: 432
    },
    category: "tablets"
  },
  {
    id: 7,
    title: "Apple AirPods Pro 2ª Geração",
    name: "Apple AirPods Pro 2ª Geração",
    description: "Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria.",
    price: "R$ 2.399,00",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4ykVbkpmqnDbv2PbsIjMGtf90dQnTLdfCNmJl_19W_56kehKq_YTOWQcGrw3dYsfFrHIiWhm1b9az3gbFYdDUOzemshehlZ5HOUl3WfdzWAJ0i1AU8cUKM0qnVYPtQVFokG1S3lcCew&usqp=CAc",
    emoji: "🎧 AirPods Pro",
    alt: "AirPods Pro",
    isNew: true,
    rating: {
      stars: 4.7,
      count: 4.7,
      reviews: 3421
    },
    category: "acessorios"
  },
  {
    id: 8,
    title: "Apple Watch Series 9 GPS 45mm",
    name: "Apple Watch Series 9 GPS 45mm",
    description: "Smartwatch mais avançado com chip S9, Double Tap, monitoramento de saúde completo.",
    price: "R$ 4.299,00",
    image: "data:image/webp;base64,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",
    emoji: "⌚ Apple Watch",
    alt: "Apple Watch",
    isNew: false,
    rating: {
      stars: 4.6,
      count: 4.6,
      reviews: 2187
    },
    category: "acessorios"
  },
  {
    id: 9,
    title: "Carregador Sem Fio MagSafe 15W",
    name: "Carregador Sem Fio MagSafe 15W",
    description: "Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito.",
    price: "R$ 399,00",
    image: "data:image/webp;base64,UklGRqIEAABXRUJQVlA4IJYEAADwHgCdASq1AIUAPj0cjESiIaESORT8IAPEtLdusDO3M9rOJpgZeS8LtNt+ueNH7S/gsS69UByan6hdjBLicND9mi1swkdVO3BzoBWMvaSC1AWTF7MM7NLqaAv+Xn/bE4gZfESfLGecrtQon3iH+VjpgEv6X8mTUzbxnLZqTb/ju90G3U0DwcK1uyFJQMhAZUUzBMKlYgLCHqPcJhC1IVC0HCxWPEpWGMhs9VrgDW8rMSYoKDjuNFJwExMVSKiapDgtOR5NOKk2ZnbvV133OIQQ4Ueurjz1VG47LdXXW5xS2Qlmjqdsta2TOMIwk+TBLBiqZkJbvS3f1GvBGTzLB+kAAP793bDxkzAzsewKVsZp+539xW72F+qbs5kwPkcJ4W3U41/gOYr5NWloX0w6NJONC+6RmopyKesLWIDREF3OotjDARsl4O2uCo2eYyrLMcPW8v1crNqIBWy7Tqmpg8M2zkv/Kl72NaH+1fsiNjw/awEOswkQobkvOl5w/B2ajr4GMcfAeSczMgX3s/120nM/wBhZRSp115cv/Ate4n1nx6uPP+VdB+Pf4u38e/g//fd6LpsY2UncXCXOrb+ke8HD+Bn+vEcg6rAvJ23GxLGvTyD3mPtOZl6CuZxciFgiXtqIaGNnxCOlxsz+yN9bbjwtg23Pcsmh037L6Ezxj5RqOClI22IdDk/22NsCOf46HqeYPNu3lgJ8nKvbQNhOZDBo4di1yr9qemuD81wcO4MrgkafLqvsxIE4x60jOSBw7joL9VhRGR9o20yti+t0dWAW6rA/1lIOX/M/cQ1Rmra1+fkc0vj4hKuX+SBsS103r0yZ+4vRaiGA7A05mg6grfDzgkfPFNZ7nu/OsLsWvEeeGEPUzNk13MQS9Gka1xJ9cE9u4jgxsF+h9Y+aQF/emzm81802QmLJG/jurjZWcp99Pzuvk8M5PoYQ3ckld7ssLF72q7xsm7gd+n8mAd1fkCre9u5D2bQiHVElgL12BhbLUxeJ5kqCwIxEGdH2y20/sg52/ueqTppos8L9G1hBdwPdgzr5oDuwgHfMulE4Ywqf+VtUI4FbDAUZNXNwzBkMQt9fsEf+uitgewcBiPihYs23VB51nLvzjkhNOWSK5hKFyT5qCgt0OIIZf6w0/PCeRAgphmZ6l+E6dwePhnv9SNzoqmwto8bW3Yz0vvUjnjJsrKgbZ9oQd5Ev5BMojfce9ampK1S0DTTHNe6/COxwHAiD0Z4HJncsGEe0BsNuj1nmeIAHEBWp4Z6oliyLy+jGfJkeIG4L588DZf2LxIGlHgANo7EABdYyP86lrGG3FtlkNCyT3IMUpW3HH6+42xIdnwwZzW+R3HFIWkAYDDYpeURwyHK2cNvs+EPSfWpXmL6UywXKJwzzOC/GVrIfgpmME4VTIqouAw/Y7akQXG+3GBqEXY19c1SiKW6KneXYhpxqUmcbE6ZQZgMPSAtblprWUbCP08qDpb8gLoVzOwEPiY3mltLN9oW/RmFf18HELOIa3mayMC59o9TuMrBCCBuK2k55WeHqPETwO6bInerBEXsUeEMwAAAA",
    emoji: "🔌 Carregador",
    alt: "Carregador",
    isNew: false,
    rating: {
      stars: 4.4,
      count: 4.4,
      reviews: 876
    },
    category: "acessorios"
  },
  {
    id: 10,
    title: "Xiaomi 13 Pro 256GB Leica",
    name: "Xiaomi 13 Pro 256GB Leica",
    description: "Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e tela AMOLED.",
    price: "R$ 3.999,00",
    image: "data:image/webp;base64,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",
    emoji: "📱 Xiaomi",
    alt: "Xiaomi",
    isNew: true,
    rating: {
      stars: 4.5,
      count: 4.5,
      reviews: 654
    },
    category: "smartphones"
  }
];

export const fetchProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
};

export const getUniqueCategories = () => {
  const categories = products.map(product => product.category);
  return ['todas', ...new Set(categories)];
};

export const getProductsByCategory = (category) => {
  if (category === 'todas') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isNew);
};
