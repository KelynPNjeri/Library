var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["pages"] = document.getElementById("pages").value;
    formData["Author"] = document.getElementById("Author").value;
    formData["status"] = document.getElementById("status").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("booklist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pages;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Author;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.status;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("status").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pages").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Author").value = selectedRow.cells[2].innerHTML;
    document.getElementById("status").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.pages;
    selectedRow.cells[2].innerHTML = formData.Author;
    selectedRow.cells[3].innerHTML = formData.status;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("booklist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
    }
    return isValid;
}

