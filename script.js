async function sendQuestion() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "Thinking...";

  // Simulate a fake response after a delay
  setTimeout(() => {
    responseDiv.innerHTML = `
      <strong>Response:</strong><br><br>
      Based on your input, we recommend planting native trees in clustered formations to promote microhabitats.<br>
      Use a mix of ground cover and pollinator-friendly shrubs between rows to improve biodiversity.<br>
      Maintain tree spacing of 2-3m for light and root efficiency.
    `;
  }, 1000);
}

