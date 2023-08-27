chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "summary") {
    console.log("Message Recieved", message.summary);
    document.getElementById("summary").innerText = message.summary;
    document.getElementById("copy").style.visibility = "visible"
  }

  if(message.action === "error"){
    console.log("ERROR FIRED");
    document.getElementById("summary").innerText = message.summary
  }
});


document.getElementById("copy").addEventListener("click", () => {
const copy = document.getElementById("summary").innerText;
console.log("TEXT TO COPY",  copy);
navigator.clipboard.writeText(copy).catch((err)=> console.log(err)) 
});

let selector = document.getElementById("choices");


document.getElementById("btn-submit").addEventListener("click", () => {
console.log("Click", document.getElementById("choices").value);
document.getElementById("summary").innerText = "Loading"
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