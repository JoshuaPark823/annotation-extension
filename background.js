// initialize the flag global as true
var flag = true;

/**
 * Need to check which tab the user is on (ie: can't inject scripts into any tab, gotta be https or a url)
 */
chrome.tabs.onActivated.addListener(tab => {

    chrome.tabs.get(tab.tabId, current_tab_info => {

        // Reads the url of the current tab into the background console
        console.log(current_tab_info.url);

        // If they're on the annotation app, we'll inject the script
        if (/^https:\/\/ml-annotation-app\.azurewebsites.net\/annotation/.test(current_tab_info.url)) {

            if (flag) {
                chrome.tabs.executeScript(null, {file : "./jquery-3.5.1.js"}, () => console.log("jquery injected"));
                chrome.tabs.executeScript(null, {file : "./foreground.js"}, () => console.log("foreground injected"));
                
                // empty string to be changed
                var STORAGE = window.localStorage;
                STORAGE.setItem('tags', 0); // init set it as 0
                window.str = STORAGE.getItem('tags'); // set the str to be accessed as the storage val

                // receive message from foreground script
                chrome.runtime.onMessage.addListener(
                    function(request, sender, sendResponse) {
                        console.log(request);

                        // update the annotations using localStorage API
                        STORAGE.setItem('tags', request.text);
                        window.str = STORAGE.getItem('tags'); 
                    }
                );

                // set the flag as false after injecting the scripts
                flag = false;
            }
        }
    });
});


