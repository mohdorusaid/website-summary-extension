

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.text == "paragraph"){
    generateSummary(message.text);
    console.log("bout right", message.text)
  }
  else
  {
    console.log("bout right", message.text)
    generateSummary(message.text);
  }
})



const content = document.body.innerText;

function generateSummary(choice){
  
  fetch("http://localhost:3000/summarize" + choice, {
  
  method: "POST",
  body: JSON.stringify({
    excerpt: content
  }), 
  headers: {
    "Content-type": "application/json"
  }
}, 
 
).then(response => response.json()).then(res =>  
  chrome.runtime.sendMessage({
  action: "summary",
  summary: res.body.summary,
}))
.catch(err=> chrome.runtime.sendMessage({
  action: "error", 
  summary: "Error in loading summary. Check your connection settings or reload the page."
}))
}
