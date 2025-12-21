const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById("product-detail").innerHTML = `
        <div class="product-images-side">
            <div class="main-image">
                <img src="${product.images[0]}" id="main-img" alt="${product.name}">
            </div>
            <div class="gallery">
                ${product.images.map(img => `<img src="${img}" onclick="document.getElementById('main-img').src='${img}'" style="cursor:pointer;">`).join("")}
            </div>
        </div>
        <div class="product-info-side">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <div style="display: flex; align-items: center; gap: 20px; margin-top: 20px;">
                <span class="price-tag">${product.price.toLocaleString()} تومان</span>
                <button onclick="addToCart()" class="btn-add-cart" style="margin-top:0; width:auto;">افزودن به سبد خرید</button>
            </div>
        </div>
    `;
}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === product.id);
    if (item) {
        item.count++;
    } else {
        cart.push({ ...product, count: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("محصول به سبد خرید اضافه شد!");
}


