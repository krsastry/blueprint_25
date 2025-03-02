const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dashboard = document.getElementById("dashboard");
const caseDetails = document.getElementById("caseDetails");
const casesList = document.getElementById("casesList");
const caseName = document.getElementById("caseName");
const caseStatus = document.getElementById("caseStatus");
const backBtn = document.getElementById("backBtn");
const loginInput = document.getElementById("loginInput");
const signupForm = document.getElementById("form");
// Mock Authentication (Replace with Firebase Auth)
let userLoggedIn = false;
function signup() {
    loginBtn.classList.add("hidden");
    loginInput.classList.add("hidden");
    signupForm.classList.remove("hidden");


}
function login() {
    userLoggedIn = true;
    loginBtn.classList.add("hidden");
    dashboard.classList.remove("hidden");
    loadCases();
    logout.classList.remove("hidden");
    loginInput.classList.add("hidden");
}

function logout(){
    userLoggedIn = false;
    loginBtn.classList.remove("hidden");
    dashboard.classList.add("hidden");
    loginInput.classList.remove("hidden");
}

let idCount = 0;
class Case {
    // Constructor to initialize the properties
    constructor(firstName, lastName, isEmployed, age, notes) {
        this.firstName = firstName;   
        this.lastName = lastName;
        this.isEmployed = isEmployed; 
        this.age = age;
        this.notes = notes;
        this.id = idCount;
        idCount++;
    }  
}    

// Mock Cases (Replace with Firebase Data)
let cases = [];
cases = [
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

function processClientForm(event) {
    event.preventDefault();
    const form = document.getElementById("clientForm");
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = parseInt(document.getElementById("age").value);
    let isEmployed = document.getElementById("employment").value;
    let resources = '';
    if (isEmployed === "Yes"){
        isEmployed = true;
    } else {
        isEmployed = false;
        resources += "AimHire Job Placement: https://friendshipplace.org/programs-outreach/aimhire-job-placement/ \n";
    }
    if (age<30)
    {
        resources += "Friendship Place's Youth and Young Adults program: https://friendshipplace.org/programs-outreach/youth-young-adults/ \n";
    }
    let notes = '';
    if (document.getElementById("abuse").value === "yes") {
        notes += 'Suffered domestic abuse, ';
        resources += "Friendship Place Domestic Abuse Resources: https://friendshipplace.org/programs-outreach/neighbors-first-families/ \n";
    }

    if (document.getElementById("alcohol/drugs").value === "yes") {
        notes += 'Struggles with addiction to alcohol or controlled substances, ';
        resources += "Alcoholics Anonymous (AA): https://www.aa.org/ \n";
        resources += "Narcotics Anonymous (NA): https://www.na.org/ \n";
    }

    if (document.getElementById("veteran").value === "yes") {
        notes += 'Veteran, ';
        resources += "Veteran Resources at Friendship Place: https://friendshipplace.org/programs-outreach/veterans-first/ \n";
    }
    let length = document.getElementById("length").value;
    notes += `Has been experiencing homelessness for ${length}, `;

    if (document.getElementById("acute-health").value === "yes") {
        notes += 'Has acute health concerns, ';
    }
    if (document.getElementById("chronic-health").value === "yes") {
        notes += 'Has chronic health concerns, ';
    }
    if (document.getElementById("previous").value === "yes") {
        notes += 'Has experienced homelessness before, ';
        resources += "Friendship Place's La Casa: https://friendshipplace.org/programs-outreach/la-casa/ \n"
    }
    // Remove trailing comma and space if any conditions were met
    if (notes.endsWith(', ')) {
        notes = notes.slice(0, -2);
    }
    // Display the notes in the result div
    document.getElementById("result").innerHTML = `
        <h3>Resources:</h3>
        <pre>${resources}</pre>
    `;

    cases.push(new Case(firstName, lastName, isEmployed, age, notes))
    /*const resultDiv = DocumentTimeline.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Resources</h3>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Age: ${age}</p>
    `;*/
}


