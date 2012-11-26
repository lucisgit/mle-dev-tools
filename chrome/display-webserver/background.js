chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.cookies.get({url: request.url, name: request.name}, function(cookie) {
            sendResponse(cookie);
        });
        return true;
});
