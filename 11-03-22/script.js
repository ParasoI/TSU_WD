//Model
let productList = [];

function getMultiplicandLimit() {
    const multiplicandLimitInput = document.getElementById('multiplicand-limit');
    return Number(multiplicandLimitInput.value);
}

function getMultiplier() {
    const multiplierInput = document.getElementById('multiplier');
    return Number(multiplierInput.value);
}

function clearProductList() {
    productList = [];
}


//View
function renderTable() {
    let productContainer = document.getElementById('product-container');
    productContainer.style.display = "block";
    productContainer.innerHTML = "<h3>Results</h3>";

    productList.forEach(function (productParagraph) {
        productContainer.appendChild(productParagraph);
    })

}

//Controller
function process() {
    const multiplicandLimit = getMultiplicandLimit();
    const multiplier = getMultiplier();
    
    clearProductList();
    calculate(multiplicandLimit, multiplier);
    renderTable();

}

function calculate(multiplicandLimit, multiplier) {
    for(i = 1;i <= multiplicandLimit;i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = multiply(i, multiplier);
        productList.push(paragraph);
    }

}

function multiply(multiplicand, multiplier) {
    const product = multiplicand * multiplier;
    return multiplicand + ' x ' + multiplier + ' = ' + product;
}