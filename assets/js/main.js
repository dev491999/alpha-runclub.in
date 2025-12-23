fetch("assets/partials/footer.html")
  .then(response => {
    if (!response.ok) throw new Error("Footer not found");
    return response.text();
  })
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  })
  .catch(err => {
    console.error(err);
  });
