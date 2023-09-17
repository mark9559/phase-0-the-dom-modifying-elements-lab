// Write your code here!
// Find the DOM node by its ID
const mainElement = document.getElementById("main");
// Check if the element exists before attempting to remove it
  mainElement.remove();

  // Create a newHeader variable that points to an <h1> element
const newHeader = document.createElement('h1');

// Append the newHeader to the document's body
document.body.appendChild(newHeader);

// Now, 'newHeader' should be an <h1> element

newHeader.id="victory"

newHeader.textContent = 'MARK is the champion';
  
  