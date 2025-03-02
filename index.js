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
let currentCase = new Case("none", "none", false, 0, "none");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dashboard = document.getElementById("dashboard");
const caseDetails = document.getElementById("caseDetails");
const caseList = document.getElementById("caseList");
const caseName = document.getElementById("caseName");
const caseStatus = document.getElementById("caseStatus");
const backBtn = document.getElementById("backBtn");
const loginInput = document.getElementById("loginInput").value;
const loginBox = document.getElementById("loginInput");
const signupBtn = document.getElementById("signupBtn");
const signupForm = document.getElementById("form");
const progForm = document.getElementById("progressForm");
// Mock Authentication (Replace with Firebase Auth)
let userLoggedIn = false;
function signup() {
    signupForm.classList.remove("hidden");
    loginBtn.classList.add("hidden");
    signupBtn.classList.add("hidden");
    loginBox.classList.add("hidden");
    

}
function login() {
    //if (loginInput!=null){
        userLoggedIn = true;
        dashboard.classList.remove("hidden");
        loginBtn.classList.add("hidden");
        signupBtn.classList.add("hidden");
        loginBox.classList.add("hidden");
        //caseDetails.classList.remove("hidden");
        
        loadCases();
    //}
}

function logout(){
    userLoggedIn = false;
    loginBtn.classList.remove("hidden");
    signupBtn.classList.remove("hidden");
    dashboard.classList.add("hidden");
    loginInput.classList.remove("hidden");
}



// Mock Cases (Replace with Firebase Data)
let cases = [];
let case1 = new Case("John", "Smith", true, 28, "Looking for housing");
let case2 = new Case("Jane", "Doe", false, 35, "Looking for employment");

// Add the cases to the cases array
cases.push(case1);
cases.push(case2);

function loadCases() {
    console.log("Loading cases...");  // Debug: Check if the function is triggered
    caseList.innerHTML = "";  // Clear the list before loading new cases
    if (cases.length === 0) {
        console.log("No cases to load.");
    }
    for (const c of cases){
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-card");
        caseDiv.innerHTML = `<h3>${c.firstName} ${c.lastName}</h3><p>${c.age}</p>`;
        caseDiv.addEventListener("click", () => {
            currentCase = c;
            showCaseDetails(c)
        });
            
        caseList.appendChild(caseDiv);
    };
}

function showCaseDetails(c) {
    // Display the case details using the correct variables
    caseName.innerText = `${c.firstName} ${c.lastName}`;  // Display full name
    caseStatus.innerText = `Age: ${c.age} | Employed: ${c.isEmployed ? "Yes" : "No"} | Notes: ${c.notes}`;  // Display age, employment status, and notes

    // Hide the dashboard and show the case details view
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
    progForm.classList.remove("hidden");
}

function processProgForm(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get the form values
    const employmentStatus = document.getElementById("employment").value;
    const healthConditions = document.getElementById("health").value;
    const additionalNotes = document.getElementById("notes").value;

    // You can either use the existing case (e.g., update the selected case) or create a new case object.
    // Assuming you are updating the existing case object and we have the current case (c)
     // Assume you have a function to get the current case (e.g., from a global variable or passed parameter)

    // Update the current case with the new information
    currentCase.isEmployed = (employmentStatus.toLowerCase() === 'yes');  // Assuming "yes" or "no" input
    currentCase.notes += `\nHealth Conditions: ${healthConditions}\nAdditional Notes: ${additionalNotes}`;

    // After updating the case, show the case details on the page
    showCaseDetails(currentCase);
}


function processClientForm(event) {
    event.preventDefault();
    const form = document.getElementById("clientForm");
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = parseInt(document.getElementById("age").value);
    let isEmployed = document.getElementById("employ").value;
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


