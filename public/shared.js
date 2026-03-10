
// ═══════════════════════════════════════
//   VOCAL FOR LOCAL  —  Unified Shared Logic
// ═══════════════════════════════════════

const CATEGORIES = [
  { id: "etikoppaka", emoji: "🪆", label: "Etikoppaka Toys", origin: "Etikoppaka, AP", age: "400+ years", story: "Artisans shape soft Ankudu wood into lacquer toys." },
  { id: "kondapalli", emoji: "🐂", label: "Kondapalli Toys", origin: "Kondapalli, Krishna District", age: "500+ years", story: "Wooden figurines depicting Indian culture." },
  { id: "kalamkari", emoji: "🎨", label: "Kalamkari Crafts", origin: "Srikalahasti, AP", age: "3000+ years", story: "Traditional textile art using natural dyes." },
  { id: "bamboo", emoji: "🌿", label: "Bamboo Craft", origin: "Araku Valley", age: "200+ years", story: "Eco-friendly products made from natural bamboo." },
  { id: "leather", emoji: "🎭", label: "Leather Puppetry", origin: "Vizianagaram", age: "2000+ years", story: "Tholu Bommalata puppets used in shadow theatre." },
  { id: "textiles", emoji: "🧵", label: "Handwoven Textiles", origin: "Pochampally", age: "400+ years", story: "Heritage fabrics woven on traditional looms." },
  { id: "jewelry", emoji: "💎", label: "Tribal Jewelry", origin: "Koraput", age: "Ancient", story: "Ornaments reflecting cultural identity." },
  { id: "wooden", emoji: "🪵", label: "Wooden Artifacts", origin: "Tirupati", age: "Traditional", story: "Artistic creations transformed from wood." }
];

const PRODUCTS = [
  // --- 1. ETIKOPPAKA TOYS ---
  { id: 1, name: "Etikoppaka Wooden Spinning Top", category: "etikoppaka", image: "https://m.media-amazon.com/images/I/61LXv8wy4eL._SX522_.jpg", price: 250, artisan: "Ramaiah Crafts", artisanVillage: "Etikoppaka", material: "wood", fragility: "high", specs: { Material: "Ankudu Wood", Dimensions: "6x5cm" } },
  { id: 2, name: "Etikoppaka Wooden Rattle", category: "etikoppaka", image: "https://m.media-amazon.com/images/I/41KwZqvSoBL._SY300_SX300_QL70_FMwebp_.jpg", price: 350, artisan: "Ramaiah Crafts", artisanVillage: "Etikoppaka", material: "wood", fragility: "high", specs: { Material: "Ankudu Wood", Dimensions: "10x4cm" } },
  { id: 3, name: "Etikoppaka Wooden Animal Toy", category: "etikoppaka", image: "https://m.media-amazon.com/images/I/811SeYsz4hL._SX679_.jpg", price: 400, artisan: "VFL Artisan", artisanVillage: "Etikoppaka", material: "wood", fragility: "high", specs: { Material: "Ankudu Wood", Dimensions: "8x4cm" } },
  { id: 4, name: "Etikoppaka Wooden Stacking Rings", category: "etikoppaka", image: "https://giheritage.com/cdn/shop/files/etikoppaka-toys-et05-h.jpg?v=1763197574", price: 450, artisan: "Ramaiah Crafts", artisanVillage: "Etikoppaka", material: "wood", fragility: "high", specs: { Material: "Ankudu Wood", Dimensions: "12x6cm" } },
  { id: 5, name: "Etikoppaka Wooden Mini Kitchen Set", category: "etikoppaka", image: "https://m.media-amazon.com/images/I/41-bSPOGlRL._SY300_SX300_QL70_FMwebp_.jpg", price: 650, artisan: "VFL Artisan", artisanVillage: "Etikoppaka", material: "wood", fragility: "high", specs: { Material: "Ankudu Wood", Dimensions: "15x10cm" } },

  // --- 2. KONDAPALLI TOYS ---
  { id: 6, name: "Kondapalli Farmer Figurine", category: "kondapalli", image: "https://m.media-amazon.com/images/I/61R0LBAueZL._SX679_.jpg", price: 550, artisan: "Venkateswara Toys", artisanVillage: "Kondapalli", material: "wood", fragility: "medium", specs: { Material: "Tella Poniki Wood", Dimensions: "12x6cm" } },
  { id: 7, name: "Kondapalli Bullock Cart", category: "kondapalli", image: "https://m.media-amazon.com/images/I/41TNuWdCRML._SY300_SX300_QL70_FMwebp_.jpg", price: 850, artisan: "Venkateswara Toys", artisanVillage: "Kondapalli", material: "wood", fragility: "medium", specs: { Material: "Tella Poniki Wood", Dimensions: "18x7cm" } },
  { id: 8, name: "Kondapalli Dancing Doll", category: "kondapalli", image: "https://m.media-amazon.com/images/I/616o7MUNfNL._SX679_.jpg", price: 750, artisan: "VFL Artisan", artisanVillage: "Kondapalli", material: "wood", fragility: "medium", specs: { Material: "Tella Poniki Wood", Dimensions: "15cm height" } },
  { id: 9, name: "Kondapalli Village Scene Set", category: "kondapalli", image: "https://m.media-amazon.com/images/I/41I+N-VYucL._SY300_SX300_QL70_FMwebp_.jpg", price: 1200, artisan: "Venkateswara Toys", artisanVillage: "Kondapalli", material: "wood", fragility: "medium", specs: { Material: "Tella Poniki Wood", Dimensions: "20x15cm" } },
  { id: 10, name: "Kondapalli Elephant Figurine", category: "kondapalli", image: "https://m.media-amazon.com/images/I/41eaQgjeT+L.jpg", price: 600, artisan: "VFL Artisan", artisanVillage: "Kondapalli", material: "wood", fragility: "medium", specs: { Material: "Tella Poniki Wood", Dimensions: "10x6cm" } },

  // --- 3. KALAMKARI ---
  { id: 11, name: "Kalamkari Cotton Saree", category: "kalamkari", image: "https://m.media-amazon.com/images/I/81ci8NuvueL._SY879_.jpg", price: 4500, artisan: "Sri Kalahasti Arts", artisanVillage: "Srikalahasti", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "5.5m" } },
  { id: 12, name: "Kalamkari Wall Hanging", category: "kalamkari", image: "https://m.media-amazon.com/images/I/51Ycu7g9a+L._SX342_SY445_QL70_FMwebp_.jpg", price: 1500, artisan: "Sri Kalahasti Arts", artisanVillage: "Srikalahasti", material: "fabric", fragility: "low", specs: { Material: "Fabric", Dimensions: "90x60cm" } },
  { id: 13, name: "Kalamkari Cushion Cover", category: "kalamkari", image: "https://m.media-amazon.com/images/I/61GCGEDBENL._SX679_.jpg", price: 650, artisan: "VFL Artisan", artisanVillage: "Srikalahasti", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "40x40cm" } },
  { id: 14, name: "Kalamkari Table Runner", category: "kalamkari", image: "https://m.media-amazon.com/images/I/61WAH0B-zZL._SY300_SX300_QL70_FMwebp_.jpg", price: 1200, artisan: "Sri Kalahasti Arts", artisanVillage: "Srikalahasti", material: "fabric", fragility: "low", specs: { Material: "Fabric", Dimensions: "150x35cm" } },
  { id: 15, name: "Kalamkari Dupatta", category: "kalamkari", image: "https://m.media-amazon.com/images/I/71H52pAGWfL._SY879_.jpg", price: 1800, artisan: "VFL Artisan", artisanVillage: "Srikalahasti", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "2.2m" } },

  // --- 4. BAMBOO ---
  { id: 16, name: "Bamboo Basket", category: "bamboo", image: "https://punarnawa.com/cdn/shop/files/punarnawa-soul-of-artistry-basket-default-title-p-wicker-handwoven-circular-bamboo-basket-32440403099705.jpg?v=1705102904&width=823", price: 450, artisan: "Araku Tribal Collective", artisanVillage: "Araku Valley", material: "bamboo", fragility: "low", specs: { Material: "Bamboo", Dimensions: "30cm dia" } },
  { id: 17, name: "Bamboo Table Lamp", category: "bamboo", image: "https://m.media-amazon.com/images/I/41FyWxcjaqL._SY300_SX300_QL70_FMwebp_.jpg", price: 1200, artisan: "Araku Tribal Collective", artisanVillage: "Araku Valley", material: "bamboo", fragility: "low", specs: { Material: "Bamboo", Dimensions: "35x20cm" } },
  { id: 18, name: "Bamboo Storage Box", category: "bamboo", image: "https://m.media-amazon.com/images/I/516FJh1Si+L._SY300_SX300_QL70_FMwebp_.jpg", price: 850, artisan: "Araku Tribal Collective", artisanVillage: "Araku Valley", material: "bamboo", fragility: "low", specs: { Material: "Bamboo", Dimensions: "25x20cm" } },
  { id: 19, name: "Bamboo Fruit Basket", category: "bamboo", image: "https://m.media-amazon.com/images/I/41MjLkg1l4L._SY300_SX300_QL70_FMwebp_.jpg", price: 550, artisan: "VFL Artisan", artisanVillage: "Araku Valley", material: "bamboo", fragility: "low", specs: { Material: "Bamboo", Dimensions: "28cm dia" } },
  { id: 20, name: "Bamboo Wall Decor", category: "bamboo", image: "https://m.media-amazon.com/images/I/4126FWY4wEL._SY300_SX300_QL70_FMwebp_.jpg", price: 950, artisan: "VFL Artisan", artisanVillage: "Araku Valley", material: "bamboo", fragility: "low", specs: { Material: "Bamboo", Dimensions: "40x40cm" } },

  // --- 5. LEATHER ---
  { id: 21, name: "Lord Rama Puppet", category: "leather", image: "https://m.media-amazon.com/images/I/41h6Q8Nt58L._SY300_SX300_QL70_FMwebp_.jpg", price: 1200, artisan: "Harikatha House", artisanVillage: "Vizianagaram", material: "leather", fragility: "medium", specs: { Material: "Leather", Dimensions: "40x18cm" } },
  { id: 22, name: "Ravana Shadow Puppet", category: "leather", image: "https://www.zwende.com/cdn/shop/products/Anjanappa_Toys_Puppets_Ravannan_Src_3_-PDP.jpg?v=1652258819&width=1800", price: 1500, artisan: "Harikatha House", artisanVillage: "Vizianagaram", material: "leather", fragility: "medium", specs: { Material: "Leather", Dimensions: "42x20cm" } },
  { id: 23, name: "Leather Puppet Wall Art", category: "leather", image: "https://www.gitagged.com/wp-content/uploads/2019/01/APLP-RADHA-KRISHNA-1.jpg", price: 1800, artisan: "VFL Artisan", artisanVillage: "Vizianagaram", material: "leather", fragility: "medium", specs: { Material: "Leather", Dimensions: "35x15cm" } },
  { id: 24, name: "Leather Puppet Set", category: "leather", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSGtzlkAvGGfpVfnCo5zigaV6ngnvh0D_-ZrogGgA1dCVBQK3XeEHbOjnjJED_UEE0j_pIS7P56MenAlK4RmmlhIOVSpJdLfr8vZlnggU0", price: 2500, artisan: "Harikatha House", artisanVillage: "Vizianagaram", material: "leather", fragility: "medium", specs: { Material: "Leather", Dimensions: "35-40cm" } },
  { id: 25, name: "Leather Puppet Souvenir", category: "leather", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv-_f2R1lpxBfBX_0OeQD1FqrBunhUMVSUZ-Lo8KegqJPZZpY4SbcOxyvTMrVGL-7Kh855vW5u-SeX7CPXbbrKPN379PUJ_g", price: 800, artisan: "VFL Artisan", artisanVillage: "Vizianagaram", material: "leather", fragility: "medium", specs: { Material: "Leather", Dimensions: "15x7cm" } },

  // --- 6. TEXTILES ---
  { id: 26, name: "Handloom Cotton Saree", category: "textiles", image: "https://m.media-amazon.com/images/I/711kmnDaP5L._SY879_.jpg", price: 3200, artisan: "Pochampally Weavers", artisanVillage: "Pochampally", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "5.5m" } },
  { id: 27, name: "Handwoven Shawl", category: "textiles", image: "https://m.media-amazon.com/images/I/61ux6w8SOAL._SY879_.jpg", price: 1500, artisan: "Pochampally Weavers", artisanVillage: "Pochampally", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "2m" } },
  { id: 28, name: "Handwoven Table Cloth", category: "textiles", image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251114/g5yR/6916c3d2a470c5082f91fb40/-473Wx593H-463701091-multi-MODEL.jpg", price: 1200, artisan: "VFL Artisan", artisanVillage: "Pochampally", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "150x100cm" } },
  { id: 29, name: "Handwoven Scarf", category: "textiles", image: "https://www.holyweaves.com/cdn/shop/files/SCF-4504200103-WHT-8.jpg?v=1748003779&width=800", price: 850, artisan: "Pochampally Weavers", artisanVillage: "Pochampally", material: "fabric", fragility: "low", specs: { Material: "Silk", Dimensions: "180x40cm" } },
  { id: 30, name: "Woven Cushion Cover", category: "textiles", image: "https://m.media-amazon.com/images/I/51p68n+FMDL._SY300_SX300_QL70_FMwebp_.jpg", price: 450, artisan: "VFL Artisan", artisanVillage: "Pochampally", material: "fabric", fragility: "low", specs: { Material: "Cotton", Dimensions: "40x40cm" } },

  // --- 7. JEWELRY ---
  { id: 31, name: "Tribal Silver Necklace", category: "jewelry", image: "https://isadoralife.com/cdn/shop/products/IMG_0519.jpg?v=1637409213&width=1200", price: 2800, artisan: "Koraput Silver Craft", artisanVillage: "Koraput", material: "metal", fragility: "medium", specs: { Material: "Silver Alloy", Dimensions: "20cm" } },
  { id: 32, name: "Tribal Beaded Earrings", category: "jewelry", image: "https://www.crunchyfashion.com/cdn/shop/files/CFE2374_1.jpg?v=1728154838&width=720", price: 450, artisan: "Koraput Silver Craft", artisanVillage: "Koraput", material: "metal", fragility: "medium", specs: { Material: "Beads", Dimensions: "6cm" } },
  { id: 33, name: "Tribal Brass Bangles", category: "jewelry", image: "https://www.masala-chai.com/cdn/shop/files/Bhumi-Handcrafted-Spiral-Tribal-Brass-Bangles-online-india.jpg?v=1763582959", price: 850, artisan: "VFL Artisan", artisanVillage: "Koraput", material: "metal", fragility: "medium", specs: { Material: "Brass", Dimensions: "7cm dia" } },
  { id: 34, name: "Tribal Anklet", category: "jewelry", image: "https://www.aachho.com/cdn/shop/products/2_8a8a03be-68cb-4812-b20e-fe8513b228ed_900x.png?v=1768288283", price: 1200, artisan: "VFL Artisan", artisanVillage: "Koraput", material: "metal", fragility: "medium", specs: { Material: "Silver Alloy", Dimensions: "24cm" } },
  { id: 35, name: "Tribal Pendant Necklace", category: "jewelry", image: "https://m.media-amazon.com/images/I/4145TOcY2fL._SY695_.jpg", price: 1600, artisan: "Koraput Silver Craft", artisanVillage: "Koraput", material: "metal", fragility: "medium", specs: { Material: "Brass", Dimensions: "22cm" } },

  // --- 8. WOODEN ARTIFACTS ---
  { id: 36, name: "Carved Wooden Elephant", category: "wooden", image: "https://m.media-amazon.com/images/I/41h2baYmmGL._SY300_SX300_QL70_FMwebp_.jpg", price: 1500, artisan: "Bhavani Wood Arts", artisanVillage: "Tirupati", material: "wood", fragility: "high", specs: { Material: "Teak", Dimensions: "12x6cm" } },
  { id: 37, name: "Wooden Jewelry Box", category: "wooden", image: "https://m.media-amazon.com/images/I/41NXTi5j+eL._SX300_SY300_QL70_FMwebp_.jpg", price: 1800, artisan: "Bhavani Wood Arts", artisanVillage: "Tirupati", material: "rosewood", fragility: "high", specs: { Material: "Rosewood", Dimensions: "20x12cm" } },
  { id: 38, name: "Wooden Pen Stand", category: "wooden", image: "https://m.media-amazon.com/images/I/41+Sze054VL._SY300_SX300_QL70_FMwebp_.jpg", price: 650, artisan: "VFL Artisan", artisanVillage: "Tirupati", material: "wood", fragility: "high", specs: { Material: "Sheesham", Dimensions: "10x8cm" } },
  { id: 39, name: "Wooden Hanging Panel", category: "wooden", image: "https://m.media-amazon.com/images/I/51d2rbN6k8L._SY300_SX300_QL70_FMwebp_.jpg", price: 2800, artisan: "Bhavani Wood Arts", artisanVillage: "Tirupati", material: "wood", fragility: "high", specs: { Material: "Teak", Dimensions: "30x20cm" } },
  { id: 40, name: "Wooden Decorative Tray", category: "wooden", image: "https://clairemartinstudios.com/cdn/shop/files/IMG_20250801_154003.jpg?v=1754211750&width=832", price: 2200, artisan: "VFL Artisan", artisanVillage: "Tirupati", material: "wood", fragility: "high", specs: { Material: "Sheesham", Dimensions: "35x25cm" } }
];



// UTILS
function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
function genQR(productId) {
  const p = ALL_PRODUCTS.find(x => x.id === productId);
  if (!p) return '';
  const data = encodeURIComponent(`artisan-auth://product/${productId}?name=${p.name}&artisan=${p.artisan}`);
  return `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${data}`;
}

// CART & CALCULATION ENGINE
const Store = {
  cart: JSON.parse(sessionStorage.getItem('vfl_cart') || '[]'),
  save() { sessionStorage.setItem('vfl_cart', JSON.stringify(this.cart)); },
  add(pid) { this.cart.push(pid); this.save(); },
  remove(idx) { this.cart.splice(idx,1); this.save(); },
  clear() { this.cart = []; this.save(); },
  count() { return this.cart.length; },
  total() { return this.cart.reduce((s,id) => { const p = ALL_PRODUCTS.find(x=>x.id===id); return s + (p?p.price:0); },0); },
  
  getFullSummary() {
    const sub = this.total();
    const delivery = sub > 0 ? 40 : 0;
    const platform = Math.round(sub * 0.05);
    return { subtotal: sub, deliveryFee: delivery, platformFee: platform, total: sub + delivery + platform };
  }
};

function renderRoleBasedNav() {
  const dynamicLinks = document.getElementById('dynamic-links');
  if (!dynamicLinks) return;
  const isBuyer = localStorage.getItem('role') === 'buyer';
  const isSeller = localStorage.getItem('vfl_seller');

  let navHTML = isBuyer ? `
      <a class="nav-link" href="buyer-home.html">Shop</a>
      <a class="nav-link" href="my-orders.html">My Orders</a>
      <a class="nav-cart" href="cart.html">🛒 <span class="nav-badge" id="cart-count">${Store.count()}</span></a>
      <a class="nav-link" onclick="logout()">Logout</a>
    ` : isSeller ? `
      <a class="nav-link" href="orders-seller.html">Dashboard</a>
      <a class="nav-link" onclick="logout()">Logout</a>
    ` : `<a class="nav-link" href="index.html">Login</a>`;
  dynamicLinks.innerHTML = navHTML;
}

function logout() {
    localStorage.clear();
    alert("You have been logged out.");
    window.location.href = "index.html";
}
window.addEventListener('DOMContentLoaded', renderRoleBasedNav);
const sellerOverrides = JSON.parse(localStorage.getItem("sellerInventory") || "[]");
const extraProducts = JSON.parse(localStorage.getItem("marketProducts") || "[]");

const ALL_PRODUCTS = PRODUCTS.map(p => {
  const override = sellerOverrides.find(o => o.id === p.id);
  return override ? { ...p, stock: override.stock } : p;
}).concat(extraProducts);

function showToast(msg, type='success') {
  const t = document.createElement('div');
  t.textContent = (type === 'success' ? '✓ ' : '⚠ ') + msg;
  t.style.cssText = `position:fixed;top:1.2rem;right:1.5rem;z-index:9999;
    background:${type==='error'?'#c0392b':'#155724'};color:#fff;
    padding:.7rem 1.4rem;border-radius:.4rem;font-family:'DM Sans',sans-serif;
    font-size:.85rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.25);
    animation:toastIn .3s ease both;`;
  const s = document.createElement('style');
  s.textContent = '@keyframes toastIn{from{transform:translateX(120%);opacity:0}to{transform:translateX(0);opacity:1}}';
  document.head.appendChild(s);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}