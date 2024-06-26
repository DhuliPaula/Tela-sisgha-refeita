  const dias = document.querySelectorAll(".dia");

  dias.forEach((element) => {
    element.addEventListener("click", function () {
      dias.forEach((dia) => dia.classList.remove("diaSelecionado"));
      element.classList.add("diaSelecionado");
    });
  });