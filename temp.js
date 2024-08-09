const xpath = "/html/body/main/div/div[3]";

// Get the first matching element
const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

console.log(element); // Logs the second <span> element inside the #container div
