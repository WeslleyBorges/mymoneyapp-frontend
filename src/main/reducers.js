import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr' 

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tabs/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

export default combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toast: toastReducer
})
