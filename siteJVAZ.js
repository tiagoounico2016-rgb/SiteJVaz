document.addEventListener("DOMContentLoaded", function () {
  const btnContato = document.getElementById("btnContato");
  const divContato = document.getElementById("contato");

  const btnHorario = document.getElementById("btnHorario");
  const divHorario = document.getElementById("horario");

  btnContato.addEventListener("click", function () {
    const isContatoVisible = divContato.style.display === "block";

    // Quando abrir contato, esconder horário
    divHorario.style.display = "none";

    if (!isContatoVisible) {
      divContato.style.display = "block";
      divContato.classList.add("mostrar");
    } else {
      divContato.style.display = "none";
      divContato.classList.remove("mostrar");
    }
  });

  btnHorario.addEventListener("click", function () {
    const isHorarioVisible = divHorario.style.display === "block";

    // Quando abrir horário, esconder contato
    divContato.style.display = "none";
    divContato.classList.remove("mostrar");

    if (!isHorarioVisible) {
      divHorario.style.display = "block";
    } else {
      divHorario.style.display = "none";
    }
  });
});





