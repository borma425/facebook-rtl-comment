chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
      chrome.tabs.sendMessage(tabId, {
        message: "TabUpdated",
      });
    }
  });
});
