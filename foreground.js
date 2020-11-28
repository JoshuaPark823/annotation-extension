console.log("Foreground Injected");

// Set a variable that points to both buttons, [0] := previous, [1] := next
var prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");

var count = 0; // initialize a temp count variable to use with each sentence
var count_prev = 0;
var total = 0; // initialize a variable to hold the user total
var title_element; // Title element
var title_string; // Enclosing string
var tags_applied = 0; // current number of tags applied (updates anytime the DOM subtree is modified)

/**
 * @param: none
 * @return {integer}: Current number of tags applied as an integer
 */
function current_amount() {

    title_element = document.getElementsByClassName("title");
    title_string = document.getElementsByClassName("title")[0].textContent;
    
    return Number(title_string.substring(21,22)); 
}

/**
 * DOM Subclass Event Listener (Count Logic)
 */
document.getElementsByClassName("title")[0].addEventListener('DOMSubtreeModified', function() {

    var tags_before = tags_applied;
    count_prev = count;
    tags_applied = current_amount(); // set the new number of tags

    // t_b <= t_a, ie: user just added some tags, or changed to same # of tags
    if (tags_before <= tags_applied) {
        count += (tags_applied - tags_before); // increment by the difference
    }

    // t_b > t_a, ie: user just removed some
    else {
        count -= (tags_before - tags_applied); // decrement by the difference
    }
});

/**
 * NEXT Event Listener
 */
prev_next[1].addEventListener('click', () => {

    tags_before = 0; // set t_b = 0 because we should theoretically be on a new sentence
    
    // This is necessary because clicking the next button modifies the DOM subtree.
    // There's probs a way to do this w the chrome.storage API but eh, this is faster
    total += count_prev;

    console.log("Updated Total: " + total);

    // send the msg using runtime api
    let message = {
        text: total
    };
    chrome.runtime.sendMessage(message);

});

/**
 * PREVIOUS Event Listener
 */
prev_next[0].addEventListener('click', () => {

    // Just "cancel"" the last tags from count if user goes back (n-miscount if user pressed previous, then didn't press next)
    total -= count_prev;
});

