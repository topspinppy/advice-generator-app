function fetchAdvice() {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { advice, id } = data.slip;
      document.querySelector(".title").innerHTML = `Advice #${id}`;
      document.querySelector(".text").innerHTML = `"${advice}"`;
    })
    .catch((error) => console.log(error));
}


fetchAdvice()