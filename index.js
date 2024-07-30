 document.getElementById("transaction-form").onsubmit = (event) => {
    event.preventDefault();  

    let type = document.getElementById("options").value;
    let name = document.getElementById("name").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (type === "choose one" || name === "" || amount === "") {
        alert("Please fill in all the fields.");
    } else {
        let tablebody = document.getElementById("tbody"); 
        let row = document.createElement("tr");
        let typeCell = document.createElement("td");
        let nameCell = document.createElement("td");
        let amountCell = document.createElement("td");
        let optionCell = document.createElement("td"); 
        row.appendChild(typeCell);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(optionCell); 
        tablebody.appendChild(row); 
        typeCell.innerHTML = type;
        nameCell.innerHTML = name;
        amountCell.innerHTML = amount;
        optionCell.innerHTML = '<button class="delete-btn">Delete</button>'; 
        document.getElementById("options").value = "choose one";
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        optionCell.querySelector('.delete-btn').onclick = function() {
            tablebody.removeChild(row);
        };
    }
};
