// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet= document.getElementById("wallet")
let newa = JSON.parse(localStorage.getItem("amount"))

wallet.innerText = +newa


let container = document.getElementById("movies")

async function search(){
    try{
        let input = document.getElementById("search").value
        const res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=be54dfa0`)
        const data = await res.json()
        // console.log(data)
        if(data===undefined){
            return false
        }
        else{
            setmovies(data.Search)
        }
    }
    catch(err){
        console.log(err)
    }
}

function setmovies(data){
     container.innerHTML=""
    data.map(function(el){
            let div = document.createElement("div")

            let image= document.createElement("img")
                image.src=el.Poster

            let title = document.createElement("h2")
            title.innerText=el.Title

            let button = document.createElement("button")
            button.innerText="Book now"
            button.setAttribute("class","book_now")
            button.addEventListener("click",function(){
                beingclicked(el)
            })
            div.append(image,title,button)

            container.append(div)
    })
}

function beingclicked(elem){

    localStorage.setItem("movie",JSON.stringify(elem))

    window.location.href="checkout.html"
}
  let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }

     id = setTimeout(function(){
        func()
    },delay)
}


