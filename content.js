// Inject an external script into the page
const script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');
(document.head || document.documentElement).appendChild(script);
script.onload = function() {
    script.remove();  // Clean up after the script has been executed
};
