
const jokeItem = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// function generateJoke() {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then(data => {
//         jokeItem.innerHTML = data.joke;
//     })

// }

// USING ASYNC/AWAİT

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json();
    jokeItem.innerHTML = data.joke;
}