const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  const endpoint = "/weather?address=" + location;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  messageThree.textContent = "";

  fetch(endpoint).then((response) => {
    response.json().then((data) => {
      if (data.errorMessage) {
        messageOne.textContent = data.errorMessage;
      } else if (!data.isTokenAvaliable) {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        messageThree.textContent =
          "Attention: Tokens have not been provided in the dev.env file. As a result, the weather information returned is dummy data, and the location has not been verified";
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
