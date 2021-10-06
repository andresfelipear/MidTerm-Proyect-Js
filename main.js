//Alert when the user click add element to the cart

var listItems = document.querySelectorAll(".breakfast a");
for(i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click",()=>{
        alert("You added one item to the cart. Check your cart.")

    })
}

//Element total
var total = document.getElementById("total-value");
var totalValue = 0.0;
total.innerText = `$${totalValue.toPrecision(2)}`;

function addItem(number){
    var element = document.createElement('div');
    element.setAttribute("id",number);
    element.innerHTML = ""

}