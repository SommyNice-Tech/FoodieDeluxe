/**
 * FOODIE DELUXE — Premium Food E-Commerce
 * Main Application Script (ES6+)
 */

'use strict';

/* =============================================
   DATA STORE
   ============================================= */

const PRODUCTS = [
  {
    id: 1,
    name: 'Margherita Royale Pizza',
    category: 'pizza',
    categoryLabel: 'Pizza',
    description: 'Hand-stretched dough with San Marzano tomatoes, fresh buffalo mozzarella, extra virgin olive oil, and garden-fresh basil leaves. Baked in a stone wood-fired oven.',
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 312,
    prepTime: '25 min',
    calories: '680 kcal',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    emoji: '🍕',
    image: '../assets/images/pizza.png',
    isLiked: false,
  },
  {
    id: 2,
    name: 'Dragon Roll Sushi Set',
    category: 'sushi',
    categoryLabel: 'Sushi',
    description: 'Premium 12-piece dragon roll with fresh salmon, yellowtail, cucumber, avocado, and tobiko. Topped with spicy mayo and teriyaki glaze.',
    price: 24.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 198,
    prepTime: '20 min',
    calories: '490 kcal',
    badge: 'new',
    badgeLabel: '✨ New',
    emoji: '🍣',
    image: '../assets/images/sushi.png',
    isLiked: false,
  },
  {
    id: 3,
    name: 'Smash Burger Classic',
    category: 'burgers',
    categoryLabel: 'Burgers',
    description: 'Double smashed Angus beef patties, American cheese, caramelized onions, pickles, secret sauce, and crispy bacon on a toasted brioche bun.',
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviews: 445,
    prepTime: '18 min',
    calories: '820 kcal',
    badge: 'popular',
    badgeLabel: '⭐ Popular',
    emoji: '🍔',
    image: '../assets/images/burger.png',
    isLiked: true,
  },
  {
    id: 4,
    name: 'Tonkotsu Ramen Bowl',
    category: 'noodles',
    categoryLabel: 'Noodles',
    description: 'Rich 12-hour simmered pork bone broth, thick noodles, chashu pork belly, soft-boiled marinated egg, nori, green onion, and bamboo shoots.',
    price: 19.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 287,
    prepTime: '15 min',
    calories: '760 kcal',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    emoji: '🍜',
    image: '../assets/images/ramen.png',
    isLiked: false,
  },
  {
    id: 5,
    name: 'Superfood Power Bowl',
    category: 'healthy',
    categoryLabel: 'Healthy',
    description: 'Quinoa base, mixed greens, roasted sweet potato, avocado, cherry tomatoes, roasted chickpeas, pomegranate seeds, feta, and tahini dressing.',
    price: 14.99,
    originalPrice: 17.99,
    rating: 4.6,
    reviews: 156,
    prepTime: '12 min',
    calories: '420 kcal',
    badge: 'new',
    badgeLabel: '✨ New',
    emoji: '🥗',
    image: null,
    isLiked: false,
  },
  {
    id: 6,
    name: 'Truffle Pasta Deluxe',
    category: 'pasta',
    categoryLabel: 'Pasta',
    description: 'Al dente tagliatelle with luxurious black truffle cream sauce, shaved Parmigiano Reggiano, crispy pancetta, and fresh herbs.',
    price: 22.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 203,
    prepTime: '22 min',
    calories: '680 kcal',
    badge: 'sale',
    badgeLabel: '🏷️ Sale',
    emoji: '🍝',
    image: null,
    isLiked: false,
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Warm Belgian dark chocolate lava cake with a perfectly molten center, served with vanilla bean ice cream, fresh raspberries, and caramel drizzle.',
    price: 11.99,
    originalPrice: 14.99,
    rating: 5.0,
    reviews: 521,
    prepTime: '10 min',
    calories: '560 kcal',
    badge: 'popular',
    badgeLabel: '⭐ Popular',
    emoji: '🍫',
    image: null,
    isLiked: true,
  },
  {
    id: 8,
    name: 'Hawaiian Poke Bowl',
    category: 'healthy',
    categoryLabel: 'Healthy',
    description: 'Sushi rice, fresh salmon, tuna, edamame, cucumber, mango salsa, avocado, pickled red onion, sesame seeds, and sriracha mayo.',
    price: 17.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    prepTime: '10 min',
    calories: '510 kcal',
    badge: null,
    badgeLabel: null,
    emoji: '🥣',
    image: null,
    isLiked: false,
  },
  {
    id: 9,
    name: 'Pepperoni Fire Pizza',
    category: 'pizza',
    categoryLabel: 'Pizza',
    description: 'Spicy tomato base, premium pepperoni, jalapeños, mozzarella blend, chili oil, and honey drizzle on a crispy thin crust.',
    price: 21.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    prepTime: '28 min',
    calories: '720 kcal',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    emoji: '🍕',
    image: null,
    isLiked: false,
  },
  {
    id: 10,
    name: 'Wagyu Beef Slider Trio',
    category: 'burgers',
    categoryLabel: 'Burgers',
    description: 'Three premium Wagyu beef sliders with truffle aioli, caramelized onions, aged cheddar, and micro greens on house-made potato rolls.',
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviews: 189,
    prepTime: '20 min',
    calories: '740 kcal',
    badge: 'sale',
    badgeLabel: '🏷️ Sale',
    emoji: '🍔',
    image: null,
    isLiked: false,
  },
  {
    id: 11,
    name: 'Pad Thai Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    description: 'Authentic stir-fried rice noodles with tiger prawns, scrambled eggs, bean sprouts, peanuts, lime, and our secret tamarind sauce.',
    price: 15.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 267,
    prepTime: '18 min',
    calories: '620 kcal',
    badge: null,
    badgeLabel: null,
    emoji: '🍜',
    image: null,
    isLiked: false,
  },
  {
    id: 12,
    name: 'Tiramisu Classico',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Classic Italian tiramisu with espresso-soaked ladyfingers, mascarpone cream, rich cocoa dusting, and a touch of dark rum.',
    price: 9.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 312,
    prepTime: '5 min',
    calories: '380 kcal',
    badge: 'popular',
    badgeLabel: '⭐ Popular',
    emoji: '🍰',
    image: null,
    isLiked: false,
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'sushi', label: 'Sushi', emoji: '🍣' },
  { id: 'burgers', label: 'Burgers', emoji: '🍔' },
  { id: 'noodles', label: 'Noodles', emoji: '🍜' },
  { id: 'healthy', label: 'Healthy', emoji: '🥗' },
  { id: 'pasta', label: 'Pasta', emoji: '🍝' },
  { id: 'desserts', label: 'Desserts', emoji: '🍰' },
];

const TESTIMONIALS = [
  {
    name: 'Sophia Chen',
    initials: 'SC',
    color: '#ff6b35',
    role: 'Food Blogger',
    stars: 5,
    text: '"Absolutely blown away by the quality! The Margherita Royale arrives piping hot with the most perfect crust. Foodie Deluxe has completely ruined me for other delivery services. 10/10 every single order!"',
  },
  {
    name: 'Marcus Rivera',
    initials: 'MR',
    color: '#4ade80',
    role: 'Verified Customer',
    stars: 5,
    text: '"The Dragon Roll was fresher than my local sushi bar — and arrived in under 30 minutes! The packaging is gorgeous and everything stays at the perfect temperature. Genuinely impressed."',
  },
  {
    name: 'Anya Patel',
    initials: 'AP',
    color: '#a78bfa',
    role: 'Restaurant Critic',
    stars: 5,
    text: '"As someone who reviews restaurants professionally, I am genuinely shocked by the quality here. The Truffle Pasta rivals anything I have had at a Michelin-starred establishment. Outstanding."',
  },
  {
    name: 'James O\'Brien',
    initials: 'JO',
    color: '#f5c842',
    role: 'Weekly Regular',
    stars: 5,
    text: '"Order from here at least 3 times a week. The app is seamless, delivery is lightning fast, and the food quality is absolutely consistent. The Chocolate Lava Cake alone is worth the subscription."',
  },
  {
    name: 'Lena Müller',
    initials: 'LM',
    color: '#38bdf8',
    role: 'Health Enthusiast',
    stars: 4,
    text: '"Finally a delivery service that takes healthy food seriously. The Superfood Bowl is incredible — fresh, beautifully portioned, and actually satisfying. Love that they show calorie counts too!"',
  },
  {
    name: 'Tyler Brooks',
    initials: 'TB',
    color: '#fb923c',
    role: 'Foodie & Developer',
    stars: 5,
    text: '"The Smash Burger Classic is an absolute unit. I have tried every burger delivery in the city and this one wins by a mile. The brioche bun stays crispy and the patty has the perfect crust. Chef\'s kiss."',
  },
];

/* =============================================
   APP STATE
   ============================================= */
const state = {
  cart: JSON.parse(localStorage.getItem('foodie_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('foodie_wishlist') || '[]'),
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  viewMode: 'grid',
  modalProduct: null,
  modalQty: 1,
  sliderIndex: 0,
  countdownInterval: null,
  promoApplied: false,
};

/* =============================================
   UTILITY FUNCTIONS
   ============================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const formatPrice = (price) => `$${price.toFixed(2)}`;

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
};

const saveCart = () => localStorage.setItem('foodie_cart', JSON.stringify(state.cart));
const saveWishlist = () => localStorage.setItem('foodie_wishlist', JSON.stringify(state.wishlist));

/* =============================================
   TOAST SYSTEM
   ============================================= */
const showToast = (message, type = 'info', icon = '🔔') => {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-text">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

/* =============================================
   NAVIGATION
   ============================================= */
const initNavbar = () => {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  const cartBtn = $('#cart-btn');
  const navSearchInput = $('#nav-search');
  const mobileSearchInput = $('#mobile-search-input');

  // Scroll effect
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    $('#back-to-top').classList.toggle('show', window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('open'));
  });

  // Cart button
  cartBtn.addEventListener('click', openCart);

  // Search inputs
  const handleSearch = (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    renderProducts();
  };
  navSearchInput?.addEventListener('input', handleSearch);
  mobileSearchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (navSearchInput) navSearchInput.value = e.target.value;
    renderProducts();
  });

  // Active nav link highlighting
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link[href^="#"]');

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, { threshold: 0.4 });
  sections.forEach(sec => observer.observe(sec));

  updateCartBadge();
};

/* =============================================
   CATEGORIES
   ============================================= */
const renderCategories = () => {
  const container = $('#categories-grid');
  if (!container) return;

  // Count per category
  const counts = {};
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  container.innerHTML = CATEGORIES.map((cat, i) => {
    const count = cat.id === 'all' ? PRODUCTS.length : (counts[cat.id] || 0);
    const isActive = state.activeCategory === cat.id;
    return `
      <div
        class="category-card animate-on-scroll stagger-${Math.min(i + 1, 6)} ${isActive ? 'active' : ''}"
        data-category="${cat.id}"
        role="button"
        tabindex="0"
        aria-label="Filter by ${cat.label}"
      >
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.label}</span>
        <span class="category-count">${count} item${count !== 1 ? 's' : ''}</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.category-card').forEach(card => {
    const activate = () => {
      state.activeCategory = card.dataset.category;
      renderCategories();
      renderProducts();
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    card.addEventListener('click', activate);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });

  triggerScrollAnimations();
};

/* =============================================
   PRODUCTS
   ============================================= */
const getFilteredProducts = () => {
  let products = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== 'all') {
    products = products.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.description.toLowerCase().includes(state.searchQuery) ||
      p.categoryLabel.toLowerCase().includes(state.searchQuery)
    );
  }

  // Sort
  switch (state.sortBy) {
    case 'price-asc': products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'rating': products.sort((a, b) => b.rating - a.rating); break;
    case 'popular': products.sort((a, b) => b.reviews - a.reviews); break;
    default: break;
  }

  return products;
};

const renderProductCard = (product, isListView = false) => {
  const inCart = state.cart.some(item => item.id === product.id);
  const isLiked = state.wishlist.includes(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const badgeHTML = product.badge
    ? `<span class="badge badge-${product.badge}">${product.badgeLabel}</span>`
    : '';

  const discountBadge = discount
    ? `<span class="badge badge-sale">-${discount}%</span>`
    : '';

  const imageContent = product.image
    ? `<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'product-emoji-placeholder\\'>${product.emoji}</div>'">`
    : `<div class="product-emoji-placeholder">${product.emoji}</div>`;

  const cartItemInCart = state.cart.find(item => item.id === product.id);

  return `
    <article
      class="product-card ${isListView ? 'list-view' : ''} animate-on-scroll"
      data-product-id="${product.id}"
      role="article"
      aria-label="${product.name}"
    >
      <div class="product-image-wrapper">
        ${imageContent}
        <div class="product-badges">
          ${badgeHTML}
          ${discountBadge}
        </div>
        <div class="product-quick-actions">
          <button
            class="quick-action-btn ${isLiked ? 'is-liked' : ''}"
            data-action="wishlist"
            data-id="${product.id}"
            aria-label="${isLiked ? 'Remove from wishlist' : 'Add to wishlist'}"
            title="${isLiked ? 'Remove from wishlist' : 'Add to wishlist'}"
          >${isLiked ? '❤️' : '🤍'}</button>
          <button
            class="quick-action-btn"
            data-action="quick-view"
            data-id="${product.id}"
            aria-label="Quick view"
            title="Quick view"
          >👁️</button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-meta">
          <span class="product-rating">
            ★ ${product.rating} <span style="color: var(--clr-text-muted); font-weight:400;">(${product.reviews})</span>
          </span>
          <span>⏱ ${product.prepTime}</span>
          <span>🔥 ${product.calories}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button
            class="add-to-cart-btn"
            data-action="add-cart"
            data-id="${product.id}"
            aria-label="Add ${product.name} to cart"
          >
            ${inCart ? '✓ Added' : '🛒 Add'}
          </button>
        </div>
      </div>
    </article>
  `;
};

const renderProducts = () => {
  const container = $('#products-grid');
  const countEl = $('#products-count');
  if (!container) return;

  const filtered = getFilteredProducts();
  const isListView = state.viewMode === 'list';

  container.className = `products-grid ${isListView ? 'list-view' : ''}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="emoji">🔍</div>
        <h3>No dishes found</h3>
        <p>Try a different search or category</p>
        <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
      </div>
    `;
    if (countEl) countEl.textContent = '0 items';
    return;
  }

  container.innerHTML = filtered.map(p => renderProductCard(p, isListView)).join('');
  if (countEl) countEl.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

  // Attach events to newly rendered cards
  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const id = parseInt(btn.dataset.id);
      if (action === 'add-cart') addToCart(id);
      if (action === 'wishlist') toggleWishlist(id);
      if (action === 'quick-view') openModal(id);
    });
  });

  // Click on card opens modal
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('[data-action]')) {
        openModal(parseInt(card.dataset.productId));
      }
    });
  });

  triggerScrollAnimations();
};

window.clearFilters = () => {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'default';
  const navSearch = $('#nav-search');
  const sortSel = $('#sort-select');
  if (navSearch) navSearch.value = '';
  if (sortSel) sortSel.value = 'default';
  renderCategories();
  renderProducts();
};

/* =============================================
   CART
   ============================================= */
const updateCartBadge = () => {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = $('#cart-badge');
  const cartBtn = $('#cart-btn');
  if (!badge) return;
  badge.textContent = totalQty;
  badge.classList.toggle('show', totalQty > 0);
  cartBtn.classList.toggle('has-items', totalQty > 0);
};

const addToCart = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  renderCartItems();
  renderProducts();
  showToast(`${product.name} added to cart!`, 'success', '🛒');
};

const removeFromCart = (productId) => {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  renderProducts();
};

const changeCartQty = (productId, delta) => {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCartItems();
};

const getCartTotals = () => {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const delivery = subtotal > 0 ? (subtotal > 40 ? 0 : 4.99) : 0;
  const discount = state.promoApplied ? subtotal * 0.15 : 0;
  const total = subtotal + delivery - discount;
  return { subtotal, delivery, discount, total };
};

const renderCartItems = () => {
  const container = $('#cart-items-container');
  const emptyEl = $('#cart-empty');
  const footerEl = $('#cart-footer');
  const countBadge = $('#cart-count-badge');

  if (!container) return;

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) countBadge.textContent = totalQty;

  if (state.cart.length === 0) {
    container.innerHTML = '';
    emptyEl?.classList.remove('hidden');
    footerEl?.classList.add('hidden');
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  container.innerHTML = state.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';

    const imgHTML = product.image
      ? `<img class="cart-item-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="cart-item-img" style="display:none">${product.emoji}</div>`
      : `<div class="cart-item-img">${product.emoji}</div>`;

    return `
      <div class="cart-item" data-cart-id="${product.id}">
        ${imgHTML}
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${formatPrice(product.price)} each</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button>
          <button class="remove-item-btn" data-action="remove" data-id="${product.id}" aria-label="Remove ${product.name}">✕</button>
        </div>
      </div>
    `;
  }).join('');

  // Attach events
  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      if (action === 'increase') changeCartQty(id, 1);
      if (action === 'decrease') changeCartQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    });
  });

  // Update summary
  const { subtotal, delivery, discount, total } = getCartTotals();
  const subtotalEl = $('#cart-subtotal');
  const deliveryEl = $('#cart-delivery');
  const discountEl = $('#cart-discount-row');
  const totalEl = $('#cart-total');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? '🎉 FREE' : formatPrice(delivery);
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (discountEl) {
    const discountValEl = $('#cart-discount-val');
    if (state.promoApplied && discount > 0) {
      discountEl.style.display = 'flex';
      if (discountValEl) discountValEl.textContent = `-${formatPrice(discount)}`;
    } else {
      discountEl.style.display = 'none';
    }
  }
};

const openCart = () => {
  const sidebar = $('#cart-sidebar');
  const overlay = $('#cart-overlay');
  sidebar?.classList.add('open');
  overlay?.classList.add('open');
  document.body.classList.add('no-scroll');
  renderCartItems();
};

const closeCart = () => {
  const sidebar = $('#cart-sidebar');
  const overlay = $('#cart-overlay');
  sidebar?.classList.remove('open');
  overlay?.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

const initCart = () => {
  $('#cart-overlay')?.addEventListener('click', closeCart);
  $('#close-cart-btn')?.addEventListener('click', closeCart);

  // Promo code
  $('#promo-apply-btn')?.addEventListener('click', () => {
    const input = $('#promo-input');
    const code = input?.value.trim().toUpperCase();
    if (code === 'FOODIE15' || code === 'SAVE15') {
      state.promoApplied = true;
      showToast('Promo code applied! 15% off your order 🎉', 'success', '🏷️');
      renderCartItems();
    } else if (code === '') {
      showToast('Please enter a promo code', 'error', '⚠️');
    } else {
      showToast('Invalid promo code. Try FOODIE15!', 'error', '❌');
    }
  });

  // Checkout
  $('#checkout-btn')?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your cart is empty!', 'error', '🛒');
      return;
    }
    showToast('🎉 Order placed successfully! Preparing your food...', 'success', '✅');
    state.cart = [];
    state.promoApplied = false;
    saveCart();
    updateCartBadge();
    renderCartItems();
    closeCart();
  });
};

/* =============================================
   WISHLIST
   ============================================= */
const updateWishlistBadge = () => {
  const count = state.wishlist.length;
  const badge = $('#wishlist-badge');
  const countBadge = $('#wishlist-count-badge');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }
  if (countBadge) countBadge.textContent = count;
};

const renderWishlistItems = () => {
  const container = $('#wishlist-items-container');
  const emptyEl = $('#wishlist-empty');
  const footerEl = $('#wishlist-footer');

  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  container.innerHTML = state.wishlist.map(productId => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return '';

    const imgHTML = product.image
      ? `<img class="wishlist-item-img" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="wishlist-item-img" style="display:none">${product.emoji}</div>`
      : `<div class="wishlist-item-img">${product.emoji}</div>`;

    const inCart = state.cart.some(item => item.id === product.id);

    return `
      <div class="wishlist-item" data-wishlist-id="${product.id}">
        ${imgHTML}
        <div class="wishlist-item-info">
          <div class="wishlist-item-category">${product.categoryLabel}</div>
          <div class="wishlist-item-name">${product.name}</div>
          <div class="wishlist-item-price">${formatPrice(product.price)}</div>
        </div>
        <div class="wishlist-item-actions">
          <button
            class="wishlist-add-cart-btn"
            data-action="wishlist-add-cart"
            data-id="${product.id}"
            aria-label="Add ${product.name} to cart"
          >${inCart ? '✓ In Cart' : '🛒 Add'}</button>
          <button
            class="wishlist-remove-btn"
            data-action="wishlist-remove"
            data-id="${product.id}"
            aria-label="Remove ${product.name} from favourites"
          >✕</button>
        </div>
      </div>
    `;
  }).join('');

  // Attach events
  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      if (action === 'wishlist-add-cart') {
        addToCart(id);
        renderWishlistItems();
      }
      if (action === 'wishlist-remove') {
        toggleWishlist(id);
        renderWishlistItems();
        updateWishlistBadge();
      }
    });
  });
};

const openWishlist = () => {
  const sidebar = $('#wishlist-sidebar');
  const overlay = $('#wishlist-overlay');
  sidebar?.classList.add('open');
  overlay?.classList.add('open');
  document.body.classList.add('no-scroll');
  renderWishlistItems();
  updateWishlistBadge();
};

const closeWishlist = () => {
  const sidebar = $('#wishlist-sidebar');
  const overlay = $('#wishlist-overlay');
  sidebar?.classList.remove('open');
  overlay?.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

const initWishlist = () => {
  $('#wishlist-overlay')?.addEventListener('click', closeWishlist);
  $('#close-wishlist-btn')?.addEventListener('click', closeWishlist);
  $('#wishlist-nav-btn')?.addEventListener('click', openWishlist);

  $('#wishlist-add-all-btn')?.addEventListener('click', () => {
    if (state.wishlist.length === 0) return;
    state.wishlist.forEach(id => addToCart(id));
    showToast('All favourites added to cart! 🛒', 'success', '❤️');
    renderWishlistItems();
  });

  updateWishlistBadge();
};

const toggleWishlist = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast(`${product.name} added to favourites!`, 'success', '❤️');
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`${product.name} removed from favourites`, 'info', '🤍');
  }

  saveWishlist();
  updateWishlistBadge();
  renderProducts();
};

/* =============================================
   PRODUCT MODAL
   ============================================= */
const openModal = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.modalProduct = product;
  state.modalQty = 1;

  const overlay = $('#modal-overlay');
  const modalImg = $('#modal-image');
  const modalEmoji = $('#modal-emoji');
  const modalCategory = $('#modal-category');
  const modalName = $('#modal-name');
  const modalDesc = $('#modal-desc');
  const modalStars = $('#modal-stars');
  const modalRating = $('#modal-rating-text');
  const modalPrepTime = $('#modal-prep');
  const modalCalories = $('#modal-cal');
  const modalQtyDisplay = $('#modal-qty-display');
  const modalPriceAmount = $('#modal-price-amount');
  const modalOriginalPrice = $('#modal-original-price');

  if (product.image) {
    modalImg.src = product.image;
    modalImg.style.display = 'block';
    if (modalEmoji) modalEmoji.style.display = 'none';
  } else {
    if (modalImg) modalImg.style.display = 'none';
    if (modalEmoji) {
      modalEmoji.textContent = product.emoji;
      modalEmoji.style.display = 'flex';
    }
  }

  if (modalCategory) modalCategory.textContent = product.categoryLabel;
  if (modalName) modalName.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalStars) modalStars.textContent = renderStars(product.rating);
  if (modalRating) modalRating.textContent = `${product.rating} (${product.reviews} reviews)`;
  if (modalPrepTime) modalPrepTime.textContent = product.prepTime;
  if (modalCalories) modalCalories.textContent = product.calories;
  if (modalQtyDisplay) modalQtyDisplay.textContent = state.modalQty;
  if (modalPriceAmount) modalPriceAmount.textContent = formatPrice(product.price * state.modalQty);
  if (modalOriginalPrice) {
    if (product.originalPrice) {
      modalOriginalPrice.textContent = `was ${formatPrice(product.originalPrice)}`;
      modalOriginalPrice.style.display = 'block';
    } else {
      modalOriginalPrice.style.display = 'none';
    }
  }

  overlay?.classList.add('open');
  document.body.classList.add('no-scroll');
};

const closeModal = () => {
  const overlay = $('#modal-overlay');
  overlay?.classList.remove('open');
  document.body.classList.remove('no-scroll');
  state.modalProduct = null;
};

const updateModalQty = (delta) => {
  state.modalQty = Math.max(1, state.modalQty + delta);
  const qtyDisplay = $('#modal-qty-display');
  const priceAmount = $('#modal-price-amount');
  if (qtyDisplay) qtyDisplay.textContent = state.modalQty;
  if (priceAmount && state.modalProduct) {
    priceAmount.textContent = formatPrice(state.modalProduct.price * state.modalQty);
  }
};

const initModal = () => {
  const overlay = $('#modal-overlay');
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  $('#close-modal-btn')?.addEventListener('click', closeModal);

  $('#modal-qty-minus')?.addEventListener('click', () => updateModalQty(-1));
  $('#modal-qty-plus')?.addEventListener('click', () => updateModalQty(1));

  $('#modal-add-btn')?.addEventListener('click', () => {
    if (!state.modalProduct) return;
    const product = state.modalProduct;
    // Add the selected quantity — addToCart increments by 1 each call
    for (let i = 0; i < state.modalQty; i++) {
      addToCart(product.id);
    }
    closeModal();
    openCart();
  });

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if ($('#modal-overlay')?.classList.contains('open')) closeModal();
      if ($('#cart-sidebar')?.classList.contains('open')) closeCart();
      if ($('#wishlist-sidebar')?.classList.contains('open')) closeWishlist();
    }
  });
};

/* =============================================
   DEALS COUNTDOWN
   ============================================= */
const initCountdown = () => {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 5, endTime.getMinutes() + 32, endTime.getSeconds() + 14);

  const updateCountdown = () => {
    const now = new Date();
    const diff = Math.max(0, endTime - now);

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const hoursEl = $('#countdown-hours');
    const minsEl = $('#countdown-mins');
    const secsEl = $('#countdown-secs');

    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(minutes);
    if (secsEl) secsEl.textContent = pad(seconds);

    if (diff === 0) clearInterval(state.countdownInterval);
  };

  state.countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
};

/* =============================================
   TESTIMONIALS SLIDER
   ============================================= */
const initTestimonialsSlider = () => {
  const track = $('#testimonials-track');
  const dotsContainer = $('#slider-dots');
  if (!track) return;

  const getVisibleCount = () => window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const renderDots = () => {
    const count = getVisibleCount();
    const totalSlides = TESTIMONIALS.length - count + 1;
    if (dotsContainer) {
      dotsContainer.innerHTML = Array.from({ length: Math.max(1, totalSlides) }, (_, i) =>
        `<button class="slider-dot ${i === state.sliderIndex ? 'active' : ''}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`
      ).join('');

      dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          state.sliderIndex = parseInt(dot.dataset.dot);
          slideTestimonials();
        });
      });
    }
  };

  const slideTestimonials = () => {
    const count = getVisibleCount();
    const maxIndex = Math.max(0, TESTIMONIALS.length - count);
    state.sliderIndex = Math.max(0, Math.min(state.sliderIndex, maxIndex));

    const cardWidth = track.querySelector('.testimonial-card')?.offsetWidth || 0;
    const gap = 24; // gap from CSS var(--space-lg)
    track.style.transform = `translateX(-${state.sliderIndex * (cardWidth + gap)}px)`;
    renderDots();
  };

  // Render testimonials
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card animate-on-scroll">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar" style="background: ${t.color}22; color: ${t.color};">${t.initials}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-meta">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  $('#slider-prev')?.addEventListener('click', () => { state.sliderIndex--; slideTestimonials(); });
  $('#slider-next')?.addEventListener('click', () => { state.sliderIndex++; slideTestimonials(); });

  // Auto-slide
  let autoSlide = setInterval(() => { state.sliderIndex++; slideTestimonials(); }, 5000);

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => { state.sliderIndex++; slideTestimonials(); }, 5000);
  });

  // Touch/swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      state.sliderIndex += diff > 0 ? 1 : -1;
      slideTestimonials();
    }
  });

  window.addEventListener('resize', () => { state.sliderIndex = 0; slideTestimonials(); });
  renderDots();
  triggerScrollAnimations();
};

/* =============================================
   NEWSLETTER
   ============================================= */
const initNewsletter = () => {
  const form = $('#newsletter-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#newsletter-input');
    if (!input?.value.trim()) {
      showToast('Please enter a valid email', 'error', '⚠️');
      return;
    }
    showToast(`🎉 Thanks for subscribing! Check ${input.value} for your 20% off code.`, 'success', '✉️');
    input.value = '';
  });
};

/* =============================================
   PRODUCTS CONTROLS
   ============================================= */
const initProductControls = () => {
  // Sort
  const sortSelect = $('#sort-select');
  sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // View toggle
  $$('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.viewMode = btn.dataset.view;
      renderProducts();
    });
  });
};

/* =============================================
   BACK TO TOP
   ============================================= */
const initBackToTop = () => {
  const btn = $('#back-to-top');
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

/* =============================================
   SCROLL ANIMATIONS
   ============================================= */
const triggerScrollAnimations = () => {
  const elements = $$('.animate-on-scroll:not(.visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
};

/* =============================================
   HERO PARALLAX
   ============================================= */
const initParallax = () => {
  const heroBgImage = $('.hero-bg-image');
  if (!heroBgImage) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBgImage.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
    }
  }, { passive: true });
};

/* =============================================
   DEAL CARD BG
   ============================================= */
const initDealCards = () => {
  const deal1 = $('#deal-card-1 .deal-bg');
  if (deal1) deal1.style.backgroundImage = "url('../assets/images/pizza.png')";
  const deal2 = $('#deal-card-2 .deal-bg');
  if (deal2) deal2.style.backgroundImage = "url('../assets/images/burger.png')";
};

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Core UI
  initNavbar();
  initCart();
  initWishlist();
  initModal();
  initProductControls();
  initBackToTop();
  initParallax();
  initDealCards();

  // Render data
  renderCategories();
  renderProducts();
  initTestimonialsSlider();
  initCountdown();
  initNewsletter();

  // Trigger scroll animations for initial viewport
  requestAnimationFrame(() => {
    setTimeout(triggerScrollAnimations, 100);
  });

  // Expose functions needed by inline HTML onclick handlers
  window.closeCart = closeCart;
  window.openCart = openCart;
  window.openModal = openModal;
  window.closeWishlist = closeWishlist;
  window.openWishlist = openWishlist;

  console.log('%c🍽️ FOODIE DELUXE %c— Loaded!', 'color: #ff6b35; font-size: 18px; font-weight: 900;', 'color: #8b90a7; font-size: 14px;');
});
