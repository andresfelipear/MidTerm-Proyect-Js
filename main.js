//Alert when the user click add element to the cart

var listItems = document.querySelectorAll(".breakfast span");
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", () => {
        alert("You added one item to the cart. Check your cart.")
    });
    //event for create the child in the cart
    listItems[i].addEventListener('click',function(){
        addItem(i);
    });
}

//Element total
var total = document.getElementById("total-value");
var totalValue = 0.0;
total.innerText = `$${totalValue.toPrecision(2)}`;


function addItem(child) {
    console.log("in the function");
    var element = document.getElementById('items');
    var item = document.createElement("div");
    item.setAttribute('class', 'item');
    item.innerHTML = '<img src="images/breakfasts/breakfast3.png" alt="img1" class="img-item">' +
        '<div class="no-margin description-item">' +
        '<h5 class="title no-margin">breakfast - mini arcoiris</h5>' +
        '<h5 class="value no-margin">$75.000 COP</h5>' +
        '</div>' +
        '<svg class="trash-can" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"></path></svg>';

    element.appendChild(item);

}