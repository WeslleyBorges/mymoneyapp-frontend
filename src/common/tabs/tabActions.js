export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabsId) {
  const visibleTabs = {}

  tabsId.forEach(tab => visibleTabs[tab] = true)

  return {
    type: 'TAB_SHOWED',
    payload: visibleTabs
  }  
}