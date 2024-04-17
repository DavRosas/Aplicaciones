const employeeList = [];
function agregarEmpleado() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const puesto = document.getElementById('puesto').value;
    
    const empleadoExistente = employeeList.find(empleado => empleado.id === id);
    if (id === '' || nombre === '' || apellido === '' || edad === '' || puesto === '') {
        alert('DEBE LLENAR TODO USUARI@.');
        return;
    }
    if (empleadoExistente) {
        alert('El ID ya existe. Ingrese un nuevo ID único.');
        return;
    }
    const empleado = { id, nombre, apellido, edad, puesto };
    employeeList.push(empleado);

    mostrarEmpleados();
}

function mostrarEmpleados() {
    const tableBody = document.getElementById('employee-list');
    tableBody.innerHTML = '';

    employeeList.forEach((empleado, index) => {
        const power = document.createElement('tr');
        power.innerHTML = `
            <td>${empleado.id}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.edad}</td>
            <td>${empleado.puesto}</td>
            <td>
                <button onclick="editarEmpleado(${index})">Editar</button>
                <button onclick="eliminarEmpleado(${index})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(power);
    });
}

function editarEmpleado(index) {
    const empleado = employeeList[index];
    const nuevoNombre = prompt('Ingrese el nuevo nombre:', empleado.nombre);
    const nuevoApellido = prompt('Ingrese el nuevo apellido:', empleado.apellido);
    const nuevaEdad = prompt('Ingrese la nueva edad:', empleado.edad);
    const nuevoPuesto = prompt('Ingrese el nuevo puesto:', empleado.puesto);

    if (nuevoNombre && nuevoApellido && nuevaEdad && nuevoPuesto) {
        empleado.nombre = nuevoNombre;
        empleado.apellido = nuevoApellido;
        empleado.edad = nuevaEdad;
        empleado.puesto = nuevoPuesto;
        mostrarEmpleados();
    }
}

function eliminarEmpleado(index) {
    employeeList.splice(index, 1);
    mostrarEmpleados();
}
