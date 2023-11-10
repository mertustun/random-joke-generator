const jokeContainer = document.querySelector('#joke')
const jokeBtn = document.querySelector('#joke-btn')

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=single"

const getJoke = () => {
    jokeContainer.classList.remove('fade')
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // console.log(data.joke);
        jokeContainer.textContent = `${data.joke}`
        jokeContainer.classList.add('fade')
    })
}

jokeBtn.addEventListener('click', getJoke)
window.addEventListener('load', getJoke)

