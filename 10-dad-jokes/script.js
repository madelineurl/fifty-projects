const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  // will return HTML without the headers set
  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
      joke.innerHTML = data.joke;
    });
}
