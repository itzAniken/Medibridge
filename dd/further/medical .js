document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const closeBtn = document.getElementById("close-btn");
  
    // Show modal
    learnMoreBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Hide modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Hide modal when clicking outside the content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  