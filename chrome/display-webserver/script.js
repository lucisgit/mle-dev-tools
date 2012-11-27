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
