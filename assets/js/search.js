var queryInput = document.getElementById("query");

function handleSearch() {
    var query = queryInput.value.trim();
    var mainUrl = "http://google.com/search?q=";
  
    if (query !== "") {
      var splittedQuery = query.split(" ").filter(function(element) {
        return element.trim() !== "";
    });
    var finishedQuery = splittedQuery.join("+");
    console.log(`Redirecting to: ${mainUrl}${finishedQuery}`);
    window.location.href = `${mainUrl}${finishedQuery}`
}};

document.addEventListener("keydown", function(event) {
    if (document.activeElement === queryInput && event.key === "Enter") {
      handleSearch();
    }
});
  
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);