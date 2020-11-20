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

            /**
             * arg_0 : null injects the script into the active tab
             * arg_1 : file is the foreground.js script we want to inject
             * arg_2 : callback function, says injection completed
             */

            if (flag) {
                chrome.tabs.executeScript(null, {file : "./jquery-3.5.1.js"}, () => console.log("jquery injected"));
                chrome.tabs.executeScript(null, {file : "./foreground.js"}, () => console.log("foreground injected"));
                
                // set the flag as false after injecting the scripts
                flag = false;
            }
            

        }
    });
});

