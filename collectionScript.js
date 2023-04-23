const url = "https://www.melsom-development.no/wp-json/wc/store/products"
const productContainer = document.querySelector(".products");

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);

    }
    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += 
        `<div class="product"> <a href="../products/batmancopy.html?id=${product.id}">
            <h2>${product.name}</h2>
            <img src="${product.images[0].src}" alt="${product.name}">
            </a>
        </div>`;
    })
}