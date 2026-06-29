let total = 0;

function addToCart(foodName, price) {

    function addToCart(

food,

price,

qty = 1

){

    qty = parseInt(qty);

    let cartItems =

    document.getElementById(
        "cartItems"
    );

    let li =

    document.createElement(
        "li"
    );

    let itemPrice =

    price * qty;

    li.innerHTML =

    food +

    " x " +

    qty +

    " = ₹" +

    itemPrice;

    cartItems.appendChild(li);

    total += itemPrice;

    document.getElementById(
        "total"
    ).innerText = total;

}
}
function searchFood(){

    let input =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let foods =
    document.getElementsByClassName("card");

    for(let i=0;i<foods.length;i++){

        let name =
        foods[i]
        .getElementsByTagName("h2")[0]
        .innerText
        .toLowerCase();

        if(name.includes(input)){

            foods[i].style.display =
            "block";

        }

        else{

            foods[i].style.display =
            "none";

        }

    }

    function clearCart(){

    document.getElementById("cartItems")
    .innerHTML = "";

    total = 0;

    document.getElementById("total")
    .innerText = total;

}
}
function applyCoupon(){

    let code =
    document.getElementById("coupon")
    .value;

    if(code === "FOOD50"){

        total = total - 50;

        if(total < 0){

            total = 0;

        }

        document.getElementById("total")
        .innerText = total;

        alert("₹50 Discount Applied!");

    }

    else{

        alert("Invalid Coupon Code!");

    }

}
function removeItem(button, price){

    button.parentElement.remove();

    total -= price;

    document.getElementById("total")
    .innerText = total;

}
window.onload = function(){

    alert(
        "🎉 Welcome to Foodie Hub!\n\nGet 20% OFF on your first order!"
    );

}
alert(

"✅ Order Placed Successfully!\n\n" +

"Order ID: #" + orderId +

"\nEstimated Delivery: 30 Minutes" +

"\n\nThank You For Ordering!"

);
function saveOrder(order){

    let orders =

    JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

}
let orderText =

"Order #" +

orderId +

" - ₹" +

total;

saveOrder(orderText);
window.onload = function(){

    alert(
        "🎉 Welcome to Foodie Hub!\nGet 20% OFF!"
    );

    let orders =

    JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    let historyList =

    document.getElementById(
        "historyList"
    );

    orders.forEach(function(order){

        let li =

        document.createElement("li");

        li.innerText = order;

        historyList.appendChild(li);

    });

}
function favoriteFood(food){

    alert(

        food +

        " added to favorites ❤️"

    );

}