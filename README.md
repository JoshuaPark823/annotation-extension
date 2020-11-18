# Annotation Extension for Blue Annotation
## Annotation Counter - (In Progress)

### Description
- Browser extension that tracks the number of annotations the user has applied. Should be able to accurately measure their start/close difference throughout all of the page's events.

### Elements
- Start : (the beginning number of tags of the annotator's work block)
- Close : (the closing number of tags of the annotator's work block) 
- Difference : (the number of tags applied by the annotator during the current work block)

### Logic
- We actually don't care which button they press (next or previous). Let's say that as soon as the page refreshes, we set a variable as the initial number of tags we see on screen. If they had pressed next, this would be 0, if they had pressed previous, this would be prev_amount. 
- Case (Next): Init is zero, user applies n, button press appies += n.
- Case (Previous): Init is prev_amount, if user removes one then n = -1 and new_amount = prev_amount - 1, and a button press applies += n (which is += -1 here). Assuming they add on, then n would be positive and behaviour would be same as case 1.

### Notes
- So basically the background.js script monitors what the user is doing and injects the foreground script appropriately.

### Issues 
- prev_next variable that gets the button HTML element is being redefined everytime the annotation tab becomes the active tab.
- Event listener on the buttons is being called multiple times for some reason.

    - Event listener is being called once, then twice, then 4 times, etc. The number of event listeners on the button doubled each time. Think I need to fix the top issue for this.

