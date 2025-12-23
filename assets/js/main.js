fetch("/assets/partials/footer.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  });
