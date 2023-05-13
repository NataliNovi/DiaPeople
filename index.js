// import axios from "axios";

// const axios = require("axios");

// console.log(axios);

// console.log(axios.isCancel("something"));

document.addEventListener("DOMContentLoaded", function (event) {
  //     const options = {
  //   method: "GET",
  //   url: "https://forecast9.p.rapidapi.com/status/",
  //   headers: {
  //     "X-RapidAPI-Key": "3f35fd0280mshd0ee386ff768314p106e18jsn3097163a72db",
  //     "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   document.getElementById("fact").innerText = data;
  // } catch (error) {
  //   console.error(error);
  // }

  fetch(" url: 'https://forecast9.p.rapidapi.com/status/',")
    .then((response) => response.json())

    .then((facts) => {
      console.log(facts);

      document.getElementById("fact").innerText = facts.fact;
    })

    .catch((error) => console.log(error));
});
