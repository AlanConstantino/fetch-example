const URL = 'https://opentdb.com/api.php?amount=11';
const divContainer = document.getElementById('content');

async function fetchData(url, options) {
  const response = await fetch(url);
  return response.json();
}

async function main() {
  const rawData = await fetchData(URL);
  console.log(rawData);
  const array = rawData.results;

  array.forEach((element) => {
    // creating HTML elements
    const question = document.createElement('h4');
    const answer = document.createElement('p');

    // populating created elements with API data
    question.innerText = element['question'];
    answer.innerText = element['correct_answer']

    // appending created elements to the DOM
    divContainer.appendChild(question);
    divContainer.appendChild(answer);
  });
}

main();