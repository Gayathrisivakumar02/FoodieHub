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