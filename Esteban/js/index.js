const submitButton = document.getElementById("submit-button");
const employeeTableBody = document.getElementById("employee-list");

function addEmployee() {
    const name = document.getElementById("employee-name").value;
    const position = document.getElementById("employee-position").value;
    const age = document.getElementById("employee-age").value;
    const dob = document.getElementById("employee-dob").value;

    // Crear una nueva fila para la tabla
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${position}</td>
        <td>${age}</td>
        <td>${dob}</td>
        <td>
            <button onclick="editEmployee(this)">Modificar</button>
            <button onclick="deleteEmployee(this)">Eliminar</button>
        </td>
    `;

    // Agregar la nueva fila a la tabla
    employeeTableBody.appendChild(newRow);

    // Limpiar los campos del formulario después de agregar el empleado
    document.getElementById("add-edit-employee-form").reset();
}

function editEmployee(button) {
    // Lógica para editar un empleado
    // Por ejemplo, puedes obtener los datos de la fila y cargarlos en el formulario para edición
}

function deleteEmployee(button) {
    // Eliminar la fila correspondiente a este botón de la tabla
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

submitButton.addEventListener("click", addEmployee);

