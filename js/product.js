const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);


document.getElementById("product-detail").innerHTML = `
<h2>${product.name}</h2>
<p>${product.description}</p>
<p>قیمت:${product.price.toLocaleString()}تومان</p>
<div class = "gallery">
${product.images.map(img => `<img src="${img}" />`).join("")}
</div>`;

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = cart.find(i => i.id === product.id);


    if (item) {
        item.count++;
    }   else {
        cart.push({...product,count: 1});
    }



localStorage.setItem("cart",JSON.stringify(cart));
alert("به سبد خرید اضافه شود")
}