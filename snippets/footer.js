document.addEventListener("DOMContentLoaded", () => {
  fetch("/snippets/footer.html")
    .then(response => {
      if (!response.ok) throw new Error("Footer load failed.");
      return response.text();
    })
    .then(footer => {
      document.body.insertAdjacentHTML("beforeend", footer)
    })
    .catch(error => console.error("Error loading footer:", error));
});
