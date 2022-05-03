const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

//Función manejadora
function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){
        // 0 = Unset, no se ha llamado al método open
        //1 = Opened, se ha llamado al método open. del objeto xhr
        //2 = HEADERS_RECEIVED, se esta llamando al metodo send ()
        //3 = LOADING, se esta cargando, es decir, esta recibinedo la respuesta.
        //4 = DONE, se ha completado la operación.
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map(user => `<li>${user.name} ✉ ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();
