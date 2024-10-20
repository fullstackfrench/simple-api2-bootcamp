document.querySelector('button').addEventListener('click', getSpell)

function getSpell(){
    fetch("https://hp-api.onrender.com/api/spells")
    .then(response => response.json())
    .then(data => {
        const randomNumber = Math.round(Math.random() * 77)
        console.log(data[randomNumber])
        console.log(data[randomNumber].name)
        document.querySelector('h2').innerText = data[randomNumber].name
        console.log(data[randomNumber].description)
        document.querySelector('p').innerText = data[randomNumber].description
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


