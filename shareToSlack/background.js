
var images;

function processTabs(){
  chrome.tabs.query({},
    (tabs)=>tabs.map(Process))
}

function Process(tab){
  if (tab.url.includes("slack")) {
    chrome.tabs.sendMessage(tab.id,{text: "damn it",value: images});
  }
}


chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(
      tab.id,
      { text: 'sharePage', value: images}
  );
  
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "images"){
    images = msg.value
  }
  processTabs();
});

