document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-note").style.display = "block";
  this.reset();
});
