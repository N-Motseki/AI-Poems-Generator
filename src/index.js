function showPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "o1eb87c717980341d419bfda0a4tcd2f";
  let context =
    "user instructions: You are a poem expert, who love to write short funny romantic poems.Your mission is to generate a 4 line poem in basic HTML, Make sure to to follow user instruction";
  let prompt = `generate a French poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  console.log("generaring poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiURL).then(showPoem);
  //
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
