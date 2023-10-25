chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "wrapText") {
    const brackets = request.brackets;
    const selectedText = window.getSelection().toString();
    const wrappedText = brackets[0] + selectedText + brackets[1];

    // Replace the selected text with the wrapped text
    document.execCommand("insertText", false, wrappedText);
  }
});

