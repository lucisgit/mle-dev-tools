chrome.storage.sync.get([
    'siteURLs'
], function(sites) {
    var url = location.href;
    var match = false;

    for (var i = 0; i < sites.siteURLs.length; i++) {
        var regexp = new RegExp('^' + sites.siteURLs[i]);

        if (url.match(regexp) !== null) {
            match = true;
        }
    }

    if (match === true) {
        // prepare div
        var webserverDiv = document.createElement('div');
        webserverDiv.setAttribute('style', "position: fixed; bottom: 0; right: 0; background: lightgray; padding: 2px 3px; opacity: 0.8;");
        document.body.appendChild(webserverDiv);

        // retrieve frontend
        chrome.extension.sendMessage({url: window.location.href, name: "fe"}, function(response){
            webserverDiv.innerHTML = response.value + ' > ';
        });

        // retrieve webserver
        chrome.extension.sendMessage({url: window.location.href, name: "MLE"}, function(response){
            webserverDiv.innerHTML += response.value;
        });
    }
});