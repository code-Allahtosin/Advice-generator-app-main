const id = document.getElementById('advice-number')
const advice = document.getElementById("advice-text")
const anotherAdvice= document.getElementById('another-advice')

// const fetch = require("node-fetch").fetch
// import fetch from "node-fetch"

fetchAdvice()
anotherAdvice.addEventListener("click", fetchAdvice)
async function fetchAdvice() {
    try {   
           let response= await fetch("https://api.adviceslip.com/advice")
            let data = await response.json()
            id.textContent = await data.slip.id
            advice.textContent= await data.slip.advice
            return
        }  catch (error) {
             console.log(error)
            }
        }        
