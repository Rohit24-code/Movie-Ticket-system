// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet= document.getElementById("wallet")
let newa = JSON.parse(localStorage.getItem("amount"))





function confirmbook(){
    let seat = document.getElementById("number_of_seats").value

    if(newa >= 100*seat){
        alert("Booking successful!")
        newa=newa - 100*seat

        localStorage.setItem("amount",JSON.stringify(newa))

        wallet.innerText = +newa
    }
    else{
        alert("Insufficient Balance!")
    }
}

// let store = document.getElementById("amount").value


wallet.innerText = +newa
















let getdata= JSON.parse(localStorage.getItem("movie"))

function asdf(el){
    let div = document.createElement("div")

    let image= document.createElement("img")
        image.src=el.Poster

    let title = document.createElement("h2")
    title.innerText=el.Title


    div.append(image,title)

 document.getElementById("movie").append(div)
}

   asdf(getdata)