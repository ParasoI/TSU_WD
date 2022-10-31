//Model
function getMultiplicandLimit() {
    const multiplicandLimitInput = document.getElementById('multiplicand-limit');
    return Number(multiplicandLimitInput.value);
}

function getMultiplier() {
    const multiplierInput = document.getElementById('multiplier');
    return Number(multiplierInput.value);
}


//View

//Controller
function process() {
    const multiplicandLimit = getMultiplicandLimit();
    const multiplier = getMultiplier();
    
    let productContainer = document.getElementById('product-container');
    productContainer.a
    productContainer.style.display = "block";

    for(let i = 1;i <= multiplicandLimit;i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = multiply(i, multiplier);

        productContainer.appendChild(paragraph);
    }
    
}

function multiply(multiplicand, multiplier) {
    const product = multiplicand * multiplier;
    return multiplicand + ' x ' + multiplier + ' = ' + product;
}