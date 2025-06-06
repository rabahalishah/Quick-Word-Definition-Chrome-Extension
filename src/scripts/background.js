/**
 *
 * Adding "Define" property in the context menu
 *
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "define-word-context-menu",
    title: "Define '%s'",
    contexts: ["selection"],
  });
});

/**
 *
 * Handling onClick Define <selected_word>
 *
 */

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);

  return tab;
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  // Use onClicked
  if (info.selectionText) {
    async function sendContentToContent() {
      const currentTab = await getCurrentTab();
      if (currentTab) {
        const tabId = currentTab.id;
        let selectedText = info.selectionText;
        chrome.tabs.sendMessage(tabId, {
          action: "defineWord",
          word: selectedText,
        });
      } else {
        console.error("No active tab found.");
      }
    }

    sendContentToContent(); // Call the function to get and use the tab ID
  }
});
