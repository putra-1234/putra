let clicks = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", handleOverlayClick);
});

function handleOverlayClick() {
  clicks++;
  if (clicks === 2) {
    // Redirect to the page for visually impaired users
    window.location.href = "http://localhost/gdsc/gdscc/gdsc.html";
  }
}

function cancelOverlay() {
  // Hide the overlay if "Cancel" is clicked
  document.getElementById("overlay").style.display = "none";
  window.location.href = "http://localhost/gdsc/gdscc/nondisabilitas.html";
}

// Show the overlay on page load
document.getElementById("overlay").style.display = "flex";
