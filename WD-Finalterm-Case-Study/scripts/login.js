function openSignup() {
    let signupBG = document.getElementById("sign-up-background");
    let signupScreen = document.getElementById("sign-up-screen");

    signupBG.style.display = "block";
    signupScreen.style.display = "flex";
}

function closeSignup() {
    let signupBG = document.getElementById("sign-up-background");
    let signupScreen = document.getElementById("sign-up-screen");

    signupBG.style.display = "none";
    signupScreen.style.display = "none";
}

function chooseClient() {
    let clientSignup = document.getElementById("signup-client-form");
    let clientCategory = document.getElementById("client-category");
    let companySignup = document.getElementById("signup-company-form");
    let companyCategory = document.getElementById("company-category");

    clientSignup.style.display = "flex";
    companySignup.style.display = "none";
    clientCategory.style.backgroundColor = "#00ADB5";
    companyCategory.style.backgroundColor = "transparent";
}

function chooseCompany() {
    let companySignup = document.getElementById("signup-company-form");
    let companyCategory = document.getElementById("company-category");
    let clientSignup = document.getElementById("signup-client-form");
    let clientCategory = document.getElementById("client-category");
    

    companySignup.style.display = "flex";
    clientSignup.style.display = "none";
    companyCategory.style.backgroundColor = "#00ADB5";
    clientCategory.style.backgroundColor = "transparent";
}