const content = document.body.innerText;
console.log(content.toString())

fetch("http://localhost:3000/summarize", {
  method: "POST",
  body: JSON.stringify({
    excerpt: content
  }), 
  headers: {
    "Content-type": "application/json"
  }
}, 
 
).then(response => response.json()).then(res =>  chrome.runtime.sendMessage({
  action: "summary",
  summary: res.body.summary,
}))
.catch(err=> console.log(err))


// chrome.runtime.sendMessage({
//       action: ,
//       summary: "Lorem Ipsum",
//     })