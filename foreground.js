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

// set the number immediately upon running the script, so should be 0
var previous_state = document.getelementsByClassName("title")[0].textContent.substring(21,22);
console.log("previous state is: " + previous_state);

prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");

/**
 * @param: none
 * @return: returns the current number of tags applied as an integer
 */
function current_amount() {

    // set the value of the title string DYNAMICALLY
    title_element = document.getElementsByClassName("title");
    title_string = document.getElementsByClassName("title")[0].textContent;
    
    console.log("current_amount returned: " + title_string.substring(21,22));
    return Number(title_string.substring(21,22)); // returns the initial amount 

}

/**
 * @param: none
 * @return: void
 * @function: updates the tags_applied variable whenever the DOM subtree is modified.
 */
document.getElementsByClassName("title")[0].addEventListener('DOMSubtreeModified', function() {
        
    console.log("tags before change are: " + tags_applied);
    tags_applied = current_amount(); //update the value of tags_applied
    console.log("updated tags are: " + tags_applied); 
});


// prev_next[1] = next button, add on click event listener
prev_next[1].addEventListener('click', function(e) {
    
    

});


// prev_next[0] = prev button, add on click event listener
prev_next[0].addEventListener('click', () => {
    current_amount();
});











