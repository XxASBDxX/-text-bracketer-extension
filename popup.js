function wrapTextWithBrackets(brackets) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: (brackets) => {
        chrome.runtime.sendMessage({ action: "wrapText", brackets });
      },
      args: [brackets],
    });
  });
}

document.getElementById("wrapDoubleQuotes").addEventListener("click", () => {
  wrapTextWithBrackets(['"', '"']);
});

document.getElementById("wrapSingleQuotes").addEventListener("click", () => {
  wrapTextWithBrackets(["'", "'"]);
});

document.getElementById("wrapParentheses").addEventListener("click", () => {
  wrapTextWithBrackets(["(", ")"]);
});

document.getElementById("wrapBrackets").addEventListener("click", () => {
  wrapTextWithBrackets(["[", "]"]);
});

document.getElementById("wrapCurlyBraces").addEventListener("click", () => {
  wrapTextWithBrackets(["{", "}"]);
});

document.getElementById("wrapAngleBrackets").addEventListener("click", () => {
  wrapTextWithBrackets(["<", ">"]);
});
