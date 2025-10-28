// Open modal
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
