let total = 0;

function addToCart(foodName, price) {

    let cartItems =
        document.getElementById("cart-items");

    let li =
        document.createElement("li");

    li.innerHTML =
        foodName + " - ₹" + price;

    cartItems.appendChild(li);

    total = total + price;

    document.getElementById("total")
        .innerHTML = total;

}