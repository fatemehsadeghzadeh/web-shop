const cartItemsDiv = document.getElementById("cart-items");
const totalPriceDiv = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart"))  || [];

function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.count;
        total += itemTotal;

        cartItemsDiv.innerHTML += `
        <div class = "cart-item">
            <img src = "${item.images[0]}" width = "60">
            <div>
                <h4>${item.name}</h4>
                <p>${item.shortDesc}</p>
                <p>${item.price.toLocaleString()}تومان</p>
            </div>
            <div class = "count-control">
                <button onclick = "changeCount(${index}, -1)">-</button>
                <span>${item.count}</span>
                <button onclick = "changeCount(${index}, 1)">+</button>
            </div>

            <p>${itemTotal.toLocaleString()}تومان</p>
            <button onclick = "removeItem(${index})">حذف</button>
            </div>
            `;
        });

        totalPriceDiv.innerText = ` مجموع کل : ${total.toLocalestring()}تومان `;
        localStorage.setItem("cart",JSON.stringify(cart));
    }


    function changeCount(index, delta) {
        cart[index].count += delta;


        if (cart[index].count <= 0) {
            cart.splice(index, 1);
        }

        renderCart();
    }


    function removeItem(index) {
        cart.splice(index, 1);
        renderCart();
    }

    function checkout() {
        alert("سفارش شما با موفقیت ثبت شد!");
        localStorage.removeItem("cart");
        Window.location.href = "index.html";
    }


    renderCart();
        
        
        



         
            
                
            
        
        

    
