const formularios_ajax = document.querySelectorAll(".formularioAjax");

function enviar_formulario_ajax(event) {
  event.preventDefault();
  const formulario = event.target;
  const data = new FormData(formulario);
  const opciones = {
    method: formulario.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  };
  fetch(formulario.action, opciones)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      if (respuesta.respuesta == "exito") {
        if (formulario.id == "login") {
          location.href = "administracion.php";
        } else {
          formulario.reset();
        }
      } else {
        alert(respuesta.mensaje);
      }
    });
}


formularios_ajax.forEach((formularios) => {
    formularios.addEventListener("submit", enviar_formulario_ajax);
});

function alertas_ajax(alerta) {
    if (alerta.Alerta === 'simple') {
        Swal.fire({
          title: alerta.Titulo,
          text: alerta.Texto,
          type: alerta.Tipo,
          confirmButtonText: "Aceptar"
        });
    } else if (alerta.Alerta === 'recargar') {
        Swal.fire({
          title: alerta.Titulo,
          text: alerta.Texto,
          type: alerta.Tipo,
          confirmButtonText: "Aceptar"
          }).then((result) => {
              if (result.value) {
                  location.reload();
            }
          })
    } else if (alerta.Alerta === 'limpiar') {
            Swal.fire({
                title: alerta.Titulo,
                text: alerta.Texto,
                type: alerta.Tipo,
                confirmButtonText: "Aceptar"
                }).then((result) => {
                    if (result.value) {
                        document.querySelector('.formularioAjax').reset();
            }
          })
        
    } else if (alerta.Alerta === 'redireccionar') {
        window.location.href = alerta.URL;
    }
}