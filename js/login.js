document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("user-mail").value;
  const pass = document.getElementById("user-pass").value;

  if (email === "admin" && pass === "admin") {
    window.location.href = "bank.html";
  } else {
    alert("Incorrect username or password");
  }
});
