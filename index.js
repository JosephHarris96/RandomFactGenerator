document.addEventListener("DOMContentLoaded", function() {

const fact = document.getElementById("fact")
const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"

async function getFact(url) {
    const response = await fetch(url)
    let data = await response.json()
    fact.innerHTML = data.text
}

fact.style.display = "none"

factGenerator.addEventListener("click", function() {
    fact.style.display = "block"
    getFact(api_url)

})

getFact(api_url)
})