let quote = document.getElementById('quote');
let auther = document.getElementById('auther');
let btn = document.getElementById('btn');

btn.addEventListener('click', main);


function fetchingData() {
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(json => {
        let quoteData = json.quote;
        let autherData = json.author;

        quote.innerHTML = `"${quoteData}"`;
        auther.innerHTML = `"${autherData}"`;
    });
};

function showLoader (){
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    auther.style.display = 'none';
    quote.style.display = 'none';
    
};

function hideLoader (){
    let loader = document.getElementById('loader');
    loader.style.display = 'none';
    auther.style.display = 'block';
    quote.style.display = 'block';
};

function main (){
    showLoader();
    setTimeout(fetchingData, 0);
    setTimeout(hideLoader, 2000);
};