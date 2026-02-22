1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans:
   getElementById(): selects one element by id and returns a single element,
   getElementsByClassName(): selects multiple elements by class and returns a live HTMLCollection,
   querySelector(): selects the first matching element using a CSS selector,
   querySelectorAll(): selects all matching elements using a CSS selector and returns a NodeList (not live).

2. How do you create and insert a new element into the DOM?
   Ans:
   First create the element and then append it to an existing parent element.

3. What is Event Bubbling? And how does it work?
   Ans:Event bubbling is when an event triggered on a child element moves upward to its parent elements in the DOM.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans:Event Delegation is a JavaScript technique where you attach an event listener to a parent element to handle events for its child elements using event bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans:preventDefault() stops the browser’s default behavior like form submission or link redirect and stopPropagation() stops the event from moving bubbling to parent elements in the DOM.
