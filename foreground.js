console.log("Foreground Injected");

// Set a variable that points to both buttons, [0] := previous, [1] := next
var prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");

var count = 0; // initialize the count as 0
var title_element; // Title element
var title_string; // Enclosing string
var init = 0; // init as 0
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
 * DOM Subclass Event Listener (Count Logic)
 */
document.getElementsByClassName("title")[0].addEventListener('DOMSubtreeModified', function() {
    
    var tags_before = tags_applied;
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
    console.log("the count after clicking next is: " + count);
});

/**
 * PREVIOUS Event Listener
 */
prev_next[0].addEventListener('click', () => {
    current_amount();
});




