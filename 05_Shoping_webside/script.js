let allProducts = [];

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=50");
  const data = await res.json();
  allProducts = data;
  displayProducts(data);
}

function displayProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" />
          <div class="info">
            <h3>${p.title}</h3>
            <p>${p.description.slice(0, 100)}...</p>
          </div>
          <div class="price">$${p.price}</div>
        `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}

fetchProducts();
