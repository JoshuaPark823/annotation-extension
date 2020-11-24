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
 * @return: returns the current number of tags applied as an integer
 */
function current_amount() {

    // set the value of the title string DYNAMICALLY
    title_element = document.getElementsByClassName("title");
    title_string = document.getElementsByClassName("title")[0].textContent;
    
    return Number(title_string.substring(21,22)); 
}

/**
 * @param count_input: new count for the popup to be updated to
 * @return: none
 */
function display_count(count_input) {
    var views = chrome.extension.getViews({
        type: "popup"
    });

    for (var i = 0; i < views.length; i++) {
        views[i].document.getElementById('display-count').innerHTML = count_input;
    }
}

/**
 * DOM Subclass Event Listener (Count Logic)
 */
document.getElementsByClassName("title")[0].addEventListener('DOMSubtreeModified', function() {
    
    var tags_before = tags_applied;
    count_prev = count;
    tags_applied = current_amount(); // set the new number of tags
    console.log("c before " + count); // log the count, debug

    // t_b <= t_a, ie: user just added some tags, or changed to same # of tags
    if (tags_before <= tags_applied) {
        count += (tags_applied - tags_before);
    }

    // t_b > t_a, ie: user just removed some
    else {
        count -= (tags_before - tags_applied);
    }

    console.log("c after " + count); // log the count, debug
});

/**
 * NEXT Event Listener
 */
prev_next[1].addEventListener('click', function(e) {

    tags_before = 0; // set t_b = 0 because we should theoretically be on a new sentence
    
    // This is necessary because clicking the next button modifies the DOM subtree.
    // There's probs a way to do this w the chrome.storage API but eh, this is faster
    total += count_prev;

    display_count(total); // update the count on the popup to the new total

    console.log("the total after clicking next is: " + total);
});

/**
 * PREVIOUS Event Listener
 */
prev_next[0].addEventListener('click', () => {
    current_amount();
});




