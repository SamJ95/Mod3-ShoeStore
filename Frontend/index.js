// Code your solution here


document.addEventListener("DOMContentLoaded", () => {
    
    const shoeCollectionDiv = document.getElementById("shoe-list")
    const mainShoe = document.getElementById("main-shoe")
    const shoeReviews = document.getElementById("reviews-list")
    const newForm = document.querySelector(".add-review-form")
    
    //Create a fetch request to get all the shoes and append them
    //to the DOM

    fetch ('http://localhost:3000/shoes')
    .then(r => r.json())
    .then((shoesArr) => {
        shoesArr.forEach(turnJSONintoHTML)
    })

    function turnJSONintoHTML(shoeObj){
        let shoeLi = document.createElement("li")

        shoeLi.innerText = `name: ${shoeObj.name}`
        
        shoeCollectionDiv.append(shoeLi)
        //Create an event listener so that after clicking 
        //the shoe name, more info is shown (appended to the DOM)
        shoeLi.addEventListener('click', () => {
            mainShoe.innerHTML = `<img src= ${shoeObj.image} />
            <br>${shoeObj.name}<br>${shoeObj.price}<br>${shoeObj.description}
            <br>`

            //figure out how to access the key value hash of reviews
        })
    }











})