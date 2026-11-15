
function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name == "" || roll == "" || course == "") {
        alert("Please fill all details");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = roll;
    row.insertCell(2).textContent = course;

    alert("Student Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}
