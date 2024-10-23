const queryCounts = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0
};

function updateDescription() {
    const type = document.getElementById("query-type").value;
    const descriptions = {
        type1: "You selected 'Salary Issue'. Please describe your concern about salary.",
        type2: "You selected 'Working Hours'. Let us know what issue you're facing.",
        type3: "You selected 'Workplace Safety'. Explain any safety concerns you have.",
        type4: "You selected 'Leave Management Issue'. Describe the type of leave you're requesting.",
        type5: "You selected 'Other'. Please provide more details about your issue."
    };
    document.getElementById("type-description").textContent = descriptions[type];
}

function submitQuery() {
    const type = document.getElementById("query-type").value;
    const input = document.getElementById("query-input").value;

    if (input.trim() === "") {
        alert("Please enter your query.");
        return;
    }

    queryCounts[type]++;
    document.getElementById(`${type}-count`).textContent = queryCounts[type];
    document.getElementById("query-input").value = "";
    alert("Query submitted successfully!");
}
