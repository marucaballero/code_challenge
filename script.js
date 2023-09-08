document.getElementById("registro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const fechanac = document.getElementById("fechaNac").value;
    
    let datos = {
        nombre: nombre,
        apellidos: apellidos,
        fechaNac: fechaNac,
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json",
        }
    };
    
    fetch ("https://jsonplaceholder.typicode.com/users", options)
        .then (data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then (datos => {
            console.log(datos);
        }).catch(e => {
            console.log(e);
            });

})