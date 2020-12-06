document.addEventListener('DOMContentLoaded', async () => {
    
    let background = chrome.extension.getBackgroundPage();
    document.getElementById("count-value").innerText = background.str;
});