// ---- NAVBAR SCROLL ----
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ---- HAMBURGER ----
document.getElementById('hamBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ---- HERO SLIDER ----
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot-btn');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  goSlide((currentSlide + 1) % slides.length);
}, 3000);

// ---- PRODUCTS DATA ----
const products = [
  {
    brand: 'ASUS',
    name: 'VivoBook 15 OLED',
    category: 'laptop',
    specs: ['Intel i5-13500H', '16GB RAM', '512GB SSD', 'FHD OLED'],
    price: '₹62,990',
    oldPrice: '₹74,990',
    badge: 'sale',
    badgeText: '15% OFF',
    image: 'pro1.jpg'
  },
  {
    brand: 'ASUS',
    name: 'ROG Strix G15 Gaming',
    category: 'laptop',
    specs: ['Ryzen 7 7745HX', '16GB DDR5', 'RTX 4060', '144Hz FHD'],
    price: '₹1,09,990',
    oldPrice: '₹1,29,990',
    badge: 'sale',
    badgeText: 'HOT DEAL',
    image: 'pro2.jpg'
  },
  {
    brand: 'Lenovo',
    name: 'IdeaPad Slim 5',
    category: 'laptop',
    specs: ['AMD Ryzen 5 7530U', '8GB RAM', '512GB SSD', 'FHD IPS'],
    price: '₹49,990',
    oldPrice: '₹58,000',
    badge: 'new',
    badgeText: 'NEW',
    image: 'pro3.jpg'
  },
  {
    brand: 'Lenovo',
    name: 'Legion 5 Pro Gaming',
    category: 'laptop',
    specs: ['Ryzen 7 7745HX', '16GB RAM', 'RTX 4070', '2K 165Hz'],
    price: '₹1,24,990',
    oldPrice: '₹1,44,990',
    badge: 'sale',
    badgeText: 'POPULAR',
    image: 'pro4.jpg'
  },
  {
    brand: 'AMD',
    name: 'Ryzen 5 7600X Processor',
    category: 'parts',
    specs: ['6 Core / 12 Thread', '4.7GHz Base', 'AM5 Socket', '105W TDP'],
    price: '₹19,990',
    oldPrice: '₹24,990',
    badge: 'sale',
    badgeText: '20% OFF',
    image: 'pro5.jpg'
  },
  {
    brand: 'Samsung',
    name: '970 EVO Plus NVMe SSD',
    category: 'parts',
    specs: ['1TB Storage', 'NVMe PCIe 3.0', '3500 MB/s Read', 'M.2 2280'],
    price: '₹7,490',
    oldPrice: '₹9,990',
    badge: 'sale',
    badgeText: 'DEAL',
    image: 'pro6.webp'
  },
  {
    brand: 'Logitech',
    name: 'G502 Hero Gaming Mouse',
    category: 'accessories',
    specs: ['25600 DPI', '11 Buttons', 'RGB Lighting', 'USB Wired'],
    price: '₹3,995',
    oldPrice: '₹5,495',
    badge: '',
    badgeText: '',
    image: 'pro7.webp'
  },
  {
    brand: 'Logitech',
    name: 'MK235 Wireless Combo',
    category: 'accessories',
    specs: ['Wireless Keyboard', 'Wireless Mouse', '2.4GHz', '3yr Battery'],
    price: '₹1,895',
    oldPrice: '₹2,295',
    badge: 'new',
    badgeText: 'POPULAR',
    image: 'pro8.webp'
  }
];

function productIcon() {
  return `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="60" height="38" rx="4" stroke="#c8c7c0" stroke-width="3"/>
    <path d="M28 56v8m24-8v8M20 64h40" stroke="#c8c7c0" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      ${p.badge ? `<div class="product-badge ${p.badge}">${p.badgeText}</div>` : ''}
      <div class="product-img">
        ${p.image ? `<img src="${p.image}" alt="${p.name}">` : productIcon()}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-specs">
          ${p.specs.map(s => `<span class="spec-pill">${s}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">${p.price} ${p.oldPrice ? `<span class="old">${p.oldPrice}</span>` : ''}</div>
          <button class="btn-buy" onclick="window.location.href='contact.html'">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

renderProducts('all');
