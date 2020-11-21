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

var count = 0; // initialize the count as 0
var prev_next; // Set a variable that points to both buttons, [0] := previous, [1] := next
var title_element; // Title element
var title_string; // Enclosing string

var init = 0; // init as 0
var tags_applied = 0; // current number of tags applied (updates anytime the DOM subtree is modified)

prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");
title_element = document.getElementsByClassName("title");

/**
 * @param: none
 * @return: returns the current number of tags applied as an integer
 */
function current_amount() {

    // set the value of the title string DYNAMICALLY
    title_string = document.getElementsByClassName("title")[0].textContent;
    
    console.log("current_amount returned: " + title_string.substring(21,22));
    return Number(title_string.substring(21,22)); // returns the initial amount 

}

/**
 * @param: none
 * @return: void
 * @function: updates the tags_applied variable whenever the DOM subtree is modified.
 */
// function update_amount() {
    // add event listener onto the title, [0] cuz it returns a collection
    title_element[0].addEventListener('DOMSubtreeModified', function() {
        
        tags_applied = current_amount(); //update the value of tags_applied
        setTimeout(function() {
            console.log("new number of tags is " + tags_applied);
        }, 2000); //wait 100ms before returning
    });
// }

// update_amount(); // add the event listener onto it

// prev_next[1] = next button, add on click event listener
prev_next[1].addEventListener('click', function(e) {

    console.log("count before was " + count);
    count += tags_applied; // increment by the number added
    console.log("new count is " + count);

    tags_applied = 0; // reset the number of tags applied back to 0
});


// prev_next[0] = prev button, add on click event listener
prev_next[0].addEventListener('click', () => {
    current_amount();
});











