function alerta() {
    var mensaje;
    var opcion = confirm("¿Samuel Almanza va a sacar 5 en el parcial?");
    if (opcion == true) {
        mensaje = "¡Si! Samuel pasó el parcial.";
    } else {
        mensaje = "No :( perdimos...";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
};

const promesa = new Promise((res, rej) => {
    console.log('id: ', alumno.id);
    console.log('nombre: ', alumno.nombre);

});

// PROMESAS
const promesax = new Promise((res, rej) => {
    setTimeout(() => {

        console.log('TAREA EN 5 SEGUNDOS');
        var temp = "Promesa Ok"

        if (temp) {
            res(temp);
        }

    }, 5000);
});

// IMPLEMENTAR PROMESA

promesa.then(resultado => {
        console.log('Then de la promesa')
    })
    .catch(err => {
        console.log(err)
    });