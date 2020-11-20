console.log("from foreground");

/**
 * HTML Elements:
 * Previous button  : class="mat-focus-indicator sentence-button mat-icon-button mat-button-base"
 * Next button      : class="mat-focus-indicator sentence-button mat-icon-button mat-button-base"
 * Selected categories container : class="selected-categories"
 * 
 * There's literally a variable that's counting the number of selected categories and updates when the user +- one:
 * <div _ngcontent-thd-c60="" class="title">Selected Categories (2) : </div>
 * If you press previous, the above count is still correct, but updates pretty slowly.
 */

var prev_next; // Set a variable that points to both buttons, [0] := previous, [1] := next
var title_element; // Title element
var title_string; // Enclosing string

prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");
title_element = document.getElementsByClassName("title");
title_string = title_element[0].textContent; //instead of innerText

/**
 * @param: none
 * @return: returns the current number of tags applied as an integer
 */
function current_amount() {
    // add a wait (if for previous)
    console.log(Number(title_string.substring(21,22)));
    console.log("I've been clicked");
    // return Number(title_string.substring(21,22)); // returns the initial amount 
}

// prev_next[0] = prev button, add on click event listener
prev_next[0].addEventListener('click', () => {
    current_amount();
});

// prev_next[1] = next button, add on click event listener
prev_next[1].addEventListener('click', function(e) {
    current_amount();
});













