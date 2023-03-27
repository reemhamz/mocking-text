const inputField = document.getElementById("input-text");
const convertButton = document.getElementById("convert-button");
const outputField = document.getElementById("converted-text");

function convertToMockingText(input) {
  let mockingText = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      mockingText += input.charAt(i).toLowerCase();
    } else {
      mockingText += input.charAt(i).toUpperCase();
    }
  }
  return mockingText;
}

convertButton.addEventListener("click", function (e) {
    e.preventDefault();
  const input = inputField.value;
  const mockingText = convertToMockingText(input);
  outputField.innerHTML = mockingText;
});