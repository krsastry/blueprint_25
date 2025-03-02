const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dashboard = document.getElementById("dashboard");
const caseDetails = document.getElementById("caseDetails");
const casesList = document.getElementById("casesList");
const caseName = document.getElementById("caseName");
const caseStatus = document.getElementById("caseStatus");
const backBtn = document.getElementById("backBtn");

// Mock Authentication (Replace with Firebase Auth)
let userLoggedIn = false;

loginBtn.addEventListener("click", () => {
    userLoggedIn = true;
    loginBtn.classList.add("hidden");
    dashboard.classList.remove("hidden");
    loadCases();
});

logoutBtn.addEventListener("click", () => {
    userLoggedIn = false;
    loginBtn.classList.remove("hidden");
    dashboard.classList.add("hidden");
});

// Mock Cases (Replace with Firebase Data)
const cases = [
    { id: 1, name: "John Doe", status: "Needs Housing" },
    { id: 2, name: "Jane Smith", status: "Needs Employment" }
];

function loadCases() {
    casesList.innerHTML = "";
    cases.forEach(c => {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-card");
        caseDiv.innerHTML = `<h3>${c.name}</h3><p>${c.status}</p>`;
        caseDiv.addEventListener("click", () => showCaseDetails(c));
        casesList.appendChild(caseDiv);
    });
}

function showCaseDetails(c) {
    caseName.textContent = c.name;
    caseStatus.textContent = c.status;
    dashboard.classList.add("hidden");
    caseDetails.classList.remove("hidden");
}

backBtn.addEventListener("click", () => {
    caseDetails.classList.add("hidden");
    dashboard.classList.remove("hidden");
});

const button = document.querySelector("#begin");
button.addEventListener('click', function() {
    document.querySelector("#heading")
})
