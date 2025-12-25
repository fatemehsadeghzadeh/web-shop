const cartItemsDiv = document.getElementById("cart-items");
const totalPriceDiv = document.getElementById("total-price");

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<h3>سبد خرید شما خالی است.</h3>";
        totalPriceDiv.innerText = "";
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.count;
        total += itemTotal;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.images[0]}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()} تومان</p>
                </div>
                <div class="count-control">
                    <button onclick="changeCount(${index}, -1)">-</button>
                    <span>${item.count}</span>
                    <button onclick="changeCount(${index}, 1)">+</button>
                </div>
                <div>${itemTotal.toLocaleString()} تومان</div>
                <button onclick="removeItem(${index})" style="background:#ddd; color:#333; padding:5px 10px;">حذف</button>
            </div>`;
    });
    // حتماً از بک‌تیک استفاده کن
    totalPriceDiv.innerText = `مجموع کل: ${total.toLocaleString()} تومان`;
}

function changeCount(index, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].count += delta;
    if (cart[index].count <= 0) cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();

// تابع برای تایید نهایی و پرداخت
function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("سبد خرید شما خالی است!");
        return;
    }

    // نمایش پیام موفقیت
    alert("سفارش شما با موفقیت ثبت شد! ممنون از خرید شما.");

    // خالی کردن سبد خرید پس از پرداخت
    localStorage.removeItem("cart");

    // بروزرسانی صفحه برای نمایش سبد خالی
    renderCart();
}

