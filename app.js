/**
 * Title: image search engine using JavaScript.
 * Description: This js file has all the js functions necessary to control the weather apps.
 * Author: (Dev Rohan).
 * Date: 21/09/2023.
 */

// select elements & assing them to variable  
let searchForm = document.querySelector('.search-form');
let searchBox = document.querySelector('.search-box');
let searchBtn = document.querySelector('.search-btn');
let searchResult = document.querySelector('.search-result');
let ShowMoreBtn = document.querySelector('.show-more-btn');

let accessKey = "fGEsu7sm_i3GcWk02E1PpWC69VHq1930d379OXeSY4Y"; // image search access key
let keyWord = "";
let page = 1;

// necessary function
async function searchImage() {
    keyWord = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
     
    if (page === 1) {
        searchResult.innerHTML = " ";
    }

    let results = data.results;
    results.map(function(result) {
        let image = document.createElement('img');
        image.src = result.urls.small;
        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    ShowMoreBtn.style.display = "block" ;
}

// eventListener
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    page = 1;
    searchImage();
});

ShowMoreBtn.addEventListener('click', function() {
    page++;
    searchImage()
});
