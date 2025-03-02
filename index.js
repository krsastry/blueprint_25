const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dashboard = document.getElementById("dashboard");
const caseDetails = document.getElementById("caseDetails");
const casesList = document.getElementById("casesList");
const caseName = document.getElementById("caseName");
const caseStatus = document.getElementById("caseStatus");
const backBtn = document.getElementById("backBtn");
const loginInput = document.getElementById("identification");
// Mock Authentication (Replace with Firebase Auth)
let userLoggedIn = false;

function login() {
    let indentification = document.querySelector("#identification").value;
    if (indentification == "Case Worker"){
        userLoggedIn = true;
        loginBtn.classList.add("hidden");
        dashboard.classList.remove("hidden");
        loadCases();
        logout.classList.remove("hidden");
        loginInput.classList.add("hidden");
    } else if(indentification == "Client"){
        userLoggedIn = true;
        loginBtn.classList.add("hidden");
        logout.classList.remove("hidden");
        loginInput.classList.add("hidden");

    }
}

function logout(){
    userLoggedIn = false;
    loginBtn.classList.remove("hidden");
    dashboard.classList.add("hidden");
    loginInput.classList.remove("hidden");
}

// Mock Cases (Replace with Firebase Data)
const cases = [
    new Case("John Smith", "Looking for housing"), 
    new Case("Jane Doe", "Looking for employment")
];

function loadCases() {
    casesList.innerHTML = "";
    for (const c of cases){
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-card");
        caseDiv.innerHTML = `<h3>${c.name}</h3><p>${c.status}</p>`;
        caseDiv.addEventListener("click", () => showCaseDetails(c));
        casesList.appendChild(caseDiv);
    };
}

function showCaseDetails(c) {
    caseName.innerText = c.name;
    caseStatus.innerText = c.status;
    dashboard.classList.add("hidden");
    backBtn.classList.remove("hidden");
    caseDetails.classList.remove("hidden");
}

function backToDash(){
    dashboard.classList.remove("hidden");
    caseDetails.classList.add("hidden");
    backBtn.classList.add("hidden");
}

function showProgressForm(){
    //when clicked, social worker sees progress of a specific indiv
}

function 

idCount = 0;
class Case {
    name;
    status;
    id;
    
    constructor(name, status){
        this.name = name;
        this.status = status;
        this.id = idCount;
        idCount++;
    }
}
