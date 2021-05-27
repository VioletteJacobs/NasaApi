let searchButton = document.querySelector("#search");
let content = document.querySelector("#content");
// addEeventListener on the button
searchButton.addEventListener("click", ()=>{
    sendApiRequest();
})

// FETCH DE DATA FOM API

async function sendApiRequest(){
    let API_key = "chO7BLYLby497qh8f2SGKQ7x9SDQrfhAEd8HwEVX";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_key}`);
    console.log(response);
    let data = await response.json();
    useApiData(data);
    console.log(data);
}

// what we do with de data 
function useApiData(data){
    content.innerHTML = data.explanation;
    content.innerHTML += `<img src="${data.url}">`
}