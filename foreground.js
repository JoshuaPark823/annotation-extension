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

// Set a variable that points to both buttons, [0] := previous, [1] := next
const prev_next = document.getElementsByClassName("mat-focus-indicator sentence-button mat-icon-button mat-button-base");

const title_element = document.getElementsByClassName("title");
var title_string = title_element[0].innerText;

/**
 * @param: none
 * @return: returns the current number of tags applied as an integer
 */
function current_amount() {
    console.log(Number(title_string.substring(21,22)));
    console.log("I've been clicked");
    // return Number(title_string.substring(21,22)); // returns the initial amount 
}

// prev_next[1] = next button, add on click event listener
prev_next[1].addEventListener('click', () => {
    current_amount();
});

// remove it immediately after
prev_next[1].removeEventListener('click', () => {});





// Test if the function call is working with jquery. Working.
// $(document).ready(function() {
//     var str = "mat-focus-indicator sentence-button mat-icon-button mat-button-base";
//     $("." + str).click(function() {
//         current_amount();
//     });
// });












