const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

if (product) {
    // استفاده از ساختار دو ستونه که در CSS تعریف کردیم
    document.getElementById("product-detail").innerHTML = `
        <div class="product-images-side">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="gallery">
                ${product.images.map(img => `<img src="${img}" onclick="this.parentElement.previousElementSibling.firstElementChild.src='${img}'">`).join("")}
            </div>
        </div>
        <div class="product-info-side">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <span class="price-tag">${product.price.toLocaleString()} تومان</span>
            <button onclick="addToCart()" class="btn-add-cart">افزودن به سبد خرید</button>
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
    alert("به سبد خرید اضافه شد!");
}
