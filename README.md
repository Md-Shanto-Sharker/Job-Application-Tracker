# 📘 JavaScript DOM & Events – Basic Concepts

## Answers to Questions

### 1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById()** → Selects one element by id and returns a single element.  
- **getElementsByClassName()** → Selects multiple elements by class and returns a live HTMLCollection.  
- **querySelector()** → Selects the first matching element using a CSS selector.  
- **querySelectorAll()** → Selects all matching elements using a CSS selector and returns a NodeList (not live).

---

### 2️⃣ How do you create and insert a new element into the DOM?

First create the element and then append it to an existing parent element.

---

### 3️⃣ What is Event Bubbling? How does it work?

Event bubbling is when an event triggered on a child element moves upward to its parent elements in the DOM.

---

### 4️⃣ What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique where you attach an event listener to a parent element to handle events for its child elements using event bubbling. It is useful because it improves performance, keeps code cleaner, and works for dynamically added elements.

---

### 5️⃣ What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()** → Stops the browser’s default behavior like form submission or link redirect.  
- **stopPropagation()** → Stops the event from bubbling to parent elements in the DOM.