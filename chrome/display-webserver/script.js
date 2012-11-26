chrome.extension.sendMessage({url: window.location.href, name: "MLE"}, function(response) {
    // prepare div
    var webserverDiv = document.createElement('div');
    webserverDiv.innerHTML = "moodle-" + response.value;
    webserverDiv.setAttribute('style', "position: fixed; bottom: 0; right: 0; background: lightgray; padding: 2px; opacity: 0.8;");

    document.body.appendChild(webserverDiv);
});
