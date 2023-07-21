// Add event listeners to the tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', switchTab));
// Switch the active tab and content
function switchTab() {
  const tabId = this.id;
  const activeTab = document.querySelector('.tab.active');
  const activeContent = document.querySelector('.tab-content.active');
  
  if (activeTab) activeTab.classList.remove('active');
  if (activeContent) activeContent.classList.remove('active');
  this.classList.add('active');
  document.getElementById(`content${tabId.slice(-1)}`).classList.add('active');
  // Save the active tab in local storage
  localStorage.setItem('activeTab', tabId);
}
// Check local storage for an active tab
const storedTab = localStorage.getItem('activeTab');
if (storedTab) {
  const tab = document.getElementById(storedTab);
  if (tab) tab.click();
}