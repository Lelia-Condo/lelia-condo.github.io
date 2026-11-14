document.addEventListener("DOMContentLoaded", function () {
  console.log("Página de Lelia Condo cargada");

  var footer = document.querySelector("footer p");
  var year = new Date().getFullYear();
  footer.innerHTML = "&copy; " + year + " Lelia Condo";
});
