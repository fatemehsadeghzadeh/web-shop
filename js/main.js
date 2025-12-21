const productList = document.getElementById("product-list");

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart"))  || [];
    const count = cart.reduce((sum,item) => sum + item.count, 0);
    document.getElementById("cart-count").innerText = count;
}

if(typeof products !== 'undefined' && productList) {
products.forEach(product =>{
    const div = document.createElement("div");
    div.className = "product-card";


    div.innerHTML = `
    <img src = "${product.images[0]}">
    <h3>${product.name}</h3>
    <p>${product.shortDesc}</p>
    <p>${product.price.toLocaleString()}تومان</p>
    <a href = "product.html?id=${product.id}">مشاهده جزییات</a>
    `;

    productList.appendChild(div);
  
});
updateCartCount();

}
function searchProducts() {
    const term = document.getElementById("search-input").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        if (title.includes(term)) {
            card.style.display = "flex"; // نمایش
        } else {
            card.style.display = "none"; // مخفی کردن
        }
    });
}
