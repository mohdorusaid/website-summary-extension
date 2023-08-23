chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "summary") {
      console.log("Message Recieved", message.summary);
      document.getElementById("summary").innerText = message.summary;
    }
  });
