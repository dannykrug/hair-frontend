import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'

//import root reducer
import rootReducer from './reducers/index'

import clients from './data/clients'
import stylists from './data/stylists'
import appointments from './data/appointments'


// create object for the default data
const defaultState = {
  stylists,
  clients,
  appointments
}

const store = createStore(rootReducer)

export default store
