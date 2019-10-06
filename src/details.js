
(function(exports) {
  function newsDetails() {
    this.result
  };
  newsDetails.prototype.pull = function(index) {
    var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-06');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('GET', 'http://localhost:9292/properties')
    xhr.onload = function() {
      if (xhr.status === 200) {
        // exports.newsOverview.result = xhr.responseText // JSON/parse?
        // exports.newsOverview.result = JSON.parse(xhr.response)
        exports.newsDetails.result = testNewsOverview.response.results
        document.dispatchEvent(detailsLoaded);
      }
    };
    xhr.send();
  };
  exports.newsDetails = newsDetails;
  var detailsLoaded = new Event('buildDetails');
  document.addEventListener('buildDetails', function () { console.log('details loaded') }, false);
})(this);

function listenForHashChange() {
  window.addEventListener("hashchange", showDetails, false)
}; listenForHashChange();

function showDetails() {
  var htmlString = "</a></br><div id='detail'> Details should be here!  " + newsDetails.result[hashID()].webTitle + "</div>"
  document.getElementById('headlines' + hashID())
  .insertAdjacentHTML('afterend', htmlString);
  console.log(hashID())
};

function hashID() {
return window.location.hash.split("#")[1];
}
