chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "summary") {
    console.log("Message Recieved", message.summary);
    document.getElementById("summary").innerText = message.summary;
  }

  if(message.action == "error"){
    document.getElementById("summary").innerText = message.summary
  }
});




let selector = document.getElementById("choices");


document.getElementById("btn-submit").addEventListener("click", () => {
console.log("Click", document.getElementById("choices").value);
if(selector.value == 0){
    
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    const message = {
      action: "triggerFunction", 
      text: "Paragraph"
    }
    chrome.tabs.sendMessage(activeTab.id, message); 
    console.log("SUCCESS IN SENDING MESSAGE")
  });
    }
  
    else {
            
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    const message = {
      action: "triggerFunction", 
      text: "Bullets"
    }
    chrome.tabs.sendMessage(activeTab.id, message); 
    console.log("SUCCESS IN SENDING MESSAGE")
  });
    }

})