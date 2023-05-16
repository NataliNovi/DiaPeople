function onSearch() {
  let gifImg = document.getElementById("gifSearch").value;
  //здесь параметр запишем через слэш
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=WXe1aojMCLcfHRAB4lBwdDfeELmLMbk0&q=" +
      gifImg +
      "&limit=2&offset=0&rating=g&lang=en"
  )
    .then((response) => response.json())
    .then((result) => {
      //console.log(result);
      let resultGif = document.getElementById("resultGif");
      resultGif.innerHTML = "";
      if (result.data && result.data.length > 0) {
        result.data.forEach((element) => {
          resultGif.innerHTML += `<img class = "pict" src=${element.images.original.url}<br>`;
        });
      } else {
        alert("No results! Enter another key word or phrase");
      }
    })

    .catch((error) => console.log(error));
}
