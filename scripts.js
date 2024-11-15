document.getElementById("change-info").addEventListener("click", function () {
  let newName = prompt("Masukkan nama baru:");
  let newDescription = prompt("Masukkan deskripsi baru:");

  if (newName) {
    document.getElementById("name").textContent = newName;
  }
  if (newDescription) {
    document.getElementById("description").textContent = newDescription;
  }
});
