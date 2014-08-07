// Saves options to chrome.storage
function save_options() {
    var sites = document.getElementById('sites').value.split('\n');
    chrome.storage.sync.set({
        siteURLs: sites
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores text area state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value sites = 'https://modules.lancaster.ac.uk/*'.
    chrome.storage.sync.get({
        siteURLs: 'https://modules.lancaster.ac.uk/'
    }, function(urls) {
        document.getElementById('sites').value = urls.siteURLs.join('\n');
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);