const baseUrl = "https://api.giphy.com/v1/gifs/search";
const key = "EVibA38ZzjcymmOrXF60fOYYj7QtvCei";

// const weatherResultElement = document.querySelector("#weather-result")

console.log('WE SHOULD SEE THIS')

function addImage(src){
  const image = new Image();
  image.src = src;
  image.addEventListener('load', () =>
  {
    document.body.append(image)
  })
}

function searchGiphy(query){

  const url = `${baseUrl}?q=${query}&api_key=${key}`

  console.log(url)

  fetch(url).then(res => res.json())
  .then(data => {console.log(data); addImage(data.data[0].images.original.url);})
}

function handleSubmit(event) {

  event.preventDefault();
  const city = document.querySelector("input").value;
  searchGiphy(city);
  searchUnSplash(city);

}

document.querySelector('form').addEventListener('submit', handleSubmit)
addImage()



// import { createApi } from "unsplash-js";

const unsplashUrl = "https://api.unsplash.com/search/photos";
const accessKey = "ZoAFnmn_Aso9C_jCZZcvfWbWPuii322Vg9E9HiRwCN8";

function searchUnSplash(query){

  const url = `${unsplashUrl}?query=${query}&client_id=${accessKey}`

  console.log(url)

  fetch(url).then(res => res.json())
  .then(data => {console.log(data); addImage(data.results[0].urls.small);})
}
