let total = 0;

function addToCart(foodName, price) {

    function addToCart(food, price){

    let cartItems =
    document.getElementById("cartItems");

    let li =
    document.createElement("li");

    li.innerHTML =

    food +

    " - ₹" +

    price +

    " <button onclick='removeItem(this," +

    price +

    ")'>❌</button>";

    cartItems.appendChild(li);

    total += price;

    document.getElementById("total")
    .innerText = total;

}
}
function placeOrder(){

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    let city =
    document.getElementById("city").value;

    let pincode =
    document.getElementById("pincode").value;

    let payment =
    document.querySelector(
        'input[name="payment"]:checked'
    );

    if(
        name === "" ||
        phone === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ){

        alert("Please fill all details!");
        return;
    }

    if(payment === null){

        alert("Please select a payment method!");
        return;
    }

    alert(
        "✅ Order Placed Successfully!\n\n" +
        "Name: " + name +
        "\nPhone: " + phone +
        "\nAddress: " + address +
        "\nCity: " + city +
        "\nPincode: " + pincode +
        "\nPayment: " + payment.value +
        "\nTotal Amount: ₹" + total
    );

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