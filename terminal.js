// Terminal Python Code Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminal-text");
  const terminalOutput = document.getElementById("terminal-output");
  const terminalBody = document.querySelector(".terminal-body");

  const pythonScript = [
    "import numpy as np",
    "import matplotlib.pyplot as plt",
    "from sklearn.linear_model import LinearRegression",
    "",
    "# Generate sample data",
    "np.random.seed(42)",
    "x = np.random.rand(100, 1)",
    "y = 3 * x + np.random.randn(100, 1) * 0.2",
    "",
    "# Create and train a model",
    "model = LinearRegression()",
    "model.fit(x, y)",
    "",
    "# Make predictions",
    "y_pred = model.predict(x)",
    "",
    "# Calculate accuracy",
    "r_squared = model.score(x, y)",
    "print(f\"Model accuracy (R²): {r_squared:.4f}\")",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = pythonScript[lineIndex];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function typeLine() {
    if (charIndex < currentLine.length) {
      terminalText.textContent += currentLine.charAt(charIndex);
      charIndex++;
      await sleep(70); // harf tezligi
      typeLine();
    } else {
      // Line tugadi
      await sleep(300);

      const codeLine = document.createElement("div");
      codeLine.classList.add("code-line");
      codeLine.textContent = terminalText.textContent;
      terminalOutput.appendChild(codeLine);

      terminalBody.scrollTop = terminalBody.scrollHeight;

      // Keyingi liniyaga o'tamiz
      lineIndex++;
      if (lineIndex < pythonScript.length) {
        currentLine = pythonScript[lineIndex];
        charIndex = 0;
        terminalText.textContent = "";
        await sleep(500);
        typeLine();
      } else {
        // Hammasi tugadi
        terminalText.textContent = ">>>"; // terminal cursor holati
      }
    }
  }

  setTimeout(typeLine, 1000);
});
