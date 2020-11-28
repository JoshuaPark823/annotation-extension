document.addEventListener('DOMContentLoaded', async () => {
    
    let background = chrome.extension.getBackgroundPage();
    let str = background.str;
    document.getElementById("count-value").innerText = str;
});