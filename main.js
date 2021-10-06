var listItems = document.querySelectorAll(".breakfast a");
for(i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click",()=>{
        alert("You added one item to the cart. Check your cart.")

    })
}
