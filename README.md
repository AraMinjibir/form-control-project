# Form-Control Project

This project demonstrates a simple form control interface for managing a list of items. It allows users to add items to the list, remove items, and search for specific items.

## Project Description

### HTML:
- The HTML file defines a simple form-control interface for managing a list of items.
- It includes a header section with a search input field.
- The main section contains a form for adding items to the list, the list itself, and a notice section.
- Each list item has a delete button to remove the item from the list.

### JavaScript:
1. **Variable Declaration**: Declares variables to reference HTML elements.

2. **Add Items Event**: Listens for the form submission event and calls the `addItem` function.

3. **Remove Items Event**: Listens for click events on the list items' delete buttons and calls the `removeItem` function.

4. **Search Event**: Listens for keyup events in the search input field and calls the `searchItem` function.

5. **Add Items Function (`addItem`)**:

   - Prevents the default form submission behavior.
   - Retrieves the value of the item input field.
   - Creates a new list item (`<li>`) element and sets its class.
   - Appends the item value and a delete button to the list item.
   - Appends the list item to the list.

6. **Remove Items Function (`removeItem`)**:

   - Checks if the clicked element is a delete button.
   - Displays a confirmation dialog.
   - Removes the corresponding list item if confirmed.

7. **Search Function (`searchItem`)**:

   - Retrieves the search value entered by the user.
   - Loops through each list item and compares its text content with the search value.
   - Displays the matching list items and hides non-matching ones.
   - Shows a notice if no matching items are found.

This code provides basic functionality for adding, removing, and searching items in a list.
