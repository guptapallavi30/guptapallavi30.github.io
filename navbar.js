document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("navbar-container");
    fetch("header.html")
      .then(function(response) {
        console.log("got navbar response");
        return response.text();
      })
      .then(function(html) {
        container.innerHTML = html;
        console.log("got navbar html");
      })
      .catch(function(error) {
        console.log("Error fetching navbar:", error);
      });
  });