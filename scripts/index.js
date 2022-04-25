// Store the wallet amount to your local storage with key "amount"
let wallet= document.getElementById("wallet")
let newa = JSON.parse(localStorage.getItem("amount")) || 0


wallet.innerText= newa


function addmoney(){
    let store = document.getElementById("amount").value
    wallet.innerText = Number(store) + Number(newa)
   localStorage.setItem("amount",JSON.stringify(+wallet.innerText))
  
}





function move(){
    window.location.href="movies.html"
}