const colors = ["green", "red", "purple", "blue"]

const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function() {
    console.log(document.body)

    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.text = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}