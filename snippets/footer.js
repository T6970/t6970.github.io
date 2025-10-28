document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    fetch("/footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Footer load failed.");
        return response.text();
      })
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => console.error("Error loading footer:", error));
  }
});
