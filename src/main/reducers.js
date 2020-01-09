import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tabs/tabReducer'

export default combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer
})
